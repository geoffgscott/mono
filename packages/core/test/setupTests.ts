import { request } from '@test/utility/request'

export async function setup() {
    const res = await request('/ping')
    if (res.status !== 200) { throw new Error('Could not ping the server') }
}

export async function teardown() {
    console.log('Done')
}
