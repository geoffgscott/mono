import { request } from '@test/utility/request'
import {
    describe,
    test,
    expect
} from 'vitest'


describe('Test Endpoints', () => {
    test('Can ping server', async () => {
        const res = await request('/ping')

        expect(res.data).toEqual({ status: 'All good in the hood.' })
    })
})
