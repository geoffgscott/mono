import {
    describe,
    test,
    expect
} from 'vitest'
import { z } from 'zod'

import { schemaModel } from '@/utility'

describe('Wraps a schema into an object sanitizer', () => {
    test('Handles basic schema', () => {
        const modelled = schemaModel(['one', 'two'], z.string().array())

        expect(modelled).toEqual(['one', 'two'])
    })

    test('Throws an error by default', () => {
        expect(() => schemaModel('one, two', z.string().array())).toThrowError()
    })

    test('Can return valid data with silent parsing', () => {
        const modelled = schemaModel(['one', 'two'], z.string().array(), false)
        expect(modelled).toEqual(['one', 'two'])
    })

    test('Can prevent error throw and return null on fail', () => {
        const modelled = schemaModel('one, two', z.string().array(), false)
        expect(modelled).toEqual(null)
    })

    test('Drops extra properties when sanitizing', () => {
        const testData = {
            name: 'Dave',
            displayName: 'Dave',
            email: 'Dave@example.com',
        }

        const testSchema = z.object({
            name: z.string(),
            email: z.string(),
        })

        expect(schemaModel(testData, testSchema, false)).toEqual({
            name: 'Dave',
            email: 'Dave@example.com',
        })
    })
})
