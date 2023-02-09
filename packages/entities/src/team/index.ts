import {
    z,
    ZodSchema,
    ZodTypeDef
} from 'zod'

export enum TeamPermission {
    Admin = 2,
    Write = 1,
    Read = 0,
}

export type TeamUser = {
    display_name: string,
    is_auth: boolean,
    email: string,
    picture: string,
    permissions: TeamPermission,
    pending: boolean,
    user_uid: string,
}

export const teamUserSchema: ZodSchema<TeamUser, ZodTypeDef, any> = z.object({
    display_name: z.string(),
    is_auth: z.boolean(),
    email: z.string()
        .email(),
    picture: z.string()
        .optional()
        .default(''),
    permissions: z.nativeEnum(TeamPermission),
    pending: z.boolean(),
    user_uid: z.string(),
})

export type Team = {
    num_auth_members: number,
    /** Email of team owner */
    team_owner: string,
}

export const teamSchema: ZodSchema<Team> = z.object({
    num_auth_members: z.number()
        .int()
        .min(0),
    team_owner: z.string()
        .email(),
})
