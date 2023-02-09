// Require the framework and instantiate it
import fastifyCors from '@fastify/cors'
import fastifyHelmet from '@fastify/helmet'
import fastifyMongo from '@fastify/mongodb'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyWebsocket from '@fastify/websocket'
import fastify from 'fastify'

const ORIGINS = (process.env.ORIGINS as string).split(',')
const DB_CONNECTION = process.env.DB_CONNECTION
// ---------------------------------------------------------------------------
// APP SETUP
const envToLogger = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
    test: false,
}

const app = fastify({ logger: envToLogger.development })

async function startServer() {
    await app.register(fastifyCors, { origin: ORIGINS })
    await app.register(fastifyHelmet)
    await app.register(fastifyWebsocket)
    await app.register(fastifySwagger, {
        openapi: {
            info: {
                title: 'Mono core',
                description: 'Core services for Monorepo',
                version: '0.0.1',
            },
            tags: [{ name: 'database', description: 'Database access endpoints' }],
        },
    })
    await app.register(fastifySwaggerUi, {
        routePrefix: 'swagger',
    })

    /** Below routes will not require authorization */
    const noAuthPaths = [
        '/socket',
        '/swagger/json',
        '/ping',
    ]

    // Handle header auth
    app.addHook('preHandler', async (request, reply) => {
    /**
     * Pre-handler will manage basic token verification to insure a user exists and
     * has a non-expired token. Additional permissions checks can happen in the route
     * by accessing the provided token object (see AppRouteHandler type)
     */
        if (!request.routerPath) {
            reply.statusCode = 404
            reply.send('Invalid route')
            return
        }

        if (noAuthPaths.includes(request.routerPath) || request.routerPath.includes('swagger')) { return }

        // Handle auth here
        console.log('RUNNING AUTH')
        return
    })

    // ---------------------------------------------------------------------------
    // ROUTES

    /** Health Check */
    app.get('/ping', async() => ({ status: 'All good in the hood.' }))

    /** Health Check with Auth */
    app.get('/ping-auth', async() => ({ status: 'All good in the hood.' }))


    // ---------------------------------------------------------------------------
    // START SERVER
    try {
        await app.listen({ port: parseInt(process.env.port ?? '3000', 10) })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

startServer()
