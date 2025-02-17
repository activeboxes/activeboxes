import { FastifyBaseLogger } from 'fastify'
import { ProjectMember } from './project-member.entity'
import { ProjectId, UserIdentity } from '@activeboxes/shared'

export type ProjectMembersResponse = {
    data: ProjectMember[]
}

export const projectMemberService = (log: FastifyBaseLogger) => ({
    async list(param: {
        platformId: string
        projectId: ProjectId
        cursorRequest: null
        limit: number
        projectRoleId: undefined
    }): Promise<ProjectMembersResponse> {
        // TODO
        return {
            data: [],
        }
    },
    async upsert(param: {
        projectId: string
        userId: string
        projectRoleName: any
    }): Promise<void> {
        // TODO
        return
    },
    async getIdsOfProjects(param: {
        platformId: string
        userId: string
    }): Promise<string[]> {
        // TODO
        return []
    },
})
