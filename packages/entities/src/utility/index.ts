import {
    ZodSchema,
    ZodTypeDef
} from 'zod'

/** Parse an value from a given schema with optional error or null return */
export function schemaModel<T, I = any>(
    data: I,
    schema: ZodSchema<T, ZodTypeDef, I>,
    throwError?: true): T
export function schemaModel<T, I = any>(
    data: I,
    schema: ZodSchema<T, ZodTypeDef, I>,
    throwError?: false): T|null
export function schemaModel<T, I = any>(
    data: I,
    schema: ZodSchema<T, ZodTypeDef, I>,
    throwError = true
) {
    if (throwError) {
        return schema.parse(data)
    } else {
        const res = schema.safeParse(data)
        return res.success ? res.data : null
    }
}
