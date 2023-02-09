import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = process.env.BASE_URL
if (!BASE_URL) { throw new Error('Missing base url for testing') }
console.log('BASE URL: ', BASE_URL)
/** Request wrapper for endpoint testing */
export async function request<T>(path: string, options: AxiosRequestConfig & object = {}) {
    // Clean path start and allow overriding to specific domain
    const sanitizedPath = path.startsWith('/') ? path.slice(1) : path
    const url = path.includes('http') ? path : `${BASE_URL}/${sanitizedPath}`

    const result = await axios<T>({
        url,
        ...options,
        validateStatus: () => true,
    })

    return {
        status: result.status,
        headers: result.headers,
        data: result.data,
    }
}

