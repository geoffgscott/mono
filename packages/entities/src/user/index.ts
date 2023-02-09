import {
    z,
    ZodSchema,
    ZodTypeDef
} from 'zod'

import { TeamPermission } from '@/team'

export type UserData = {
    email: string,
    /** Expiry date OR "active" */
    sub_exp: number|string,
    phoneNumber?: string,
    license_owner?: string,

    team_id: string,
    team_perm: number,
    team_owner: string,

    plan?: string,
    planName?: string,
    planQty: number,
    stripeCreated?: number,
}

export const userDataSchema: ZodSchema<UserData, ZodTypeDef, any> = z.object({
    email: z.string()
        .email(),
    sub_exp: z.union([z.number(), z.string()]),
    team_id: z.string()
        .optional()
        .default(''),
    team_perm: z.number()
        .optional()
        .default(TeamPermission.Read),
    team_owner: z.string()
        .optional()
        .default(''),
    plan: z.string()
        .optional(),
    planName: z.string()
        .optional()
        .default(''),
    planQty: z.number()
        .int()
        .optional()
        .default(0),
})
