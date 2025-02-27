import { ActivepiecesError, ErrorCode, isNil, Project, ProjectId, ProjectRole } from '@activeboxes/shared';
import { repoFactory } from '../core/db/repo-factory';
import { ProjectRoleEntity } from './project-role.entity';

export const projectRoleRepo = repoFactory(ProjectRoleEntity)

export const projectRoleService = {
  async getOne(projectId: ProjectId | undefined): Promise<ProjectRole | null> {
    if (isNil(projectId)) {
      return null
    }

    return projectRoleRepo().findOneBy({
      id: projectId,
    })
  },

  async getOneOrThrow(params: {
    id?: string,
    name?: string,
    platformId?: string,
  }): Promise<ProjectRole> {
    const project = await projectRoleRepo().findOneBy({
      ...(params.id ? {id: params.id} : {}),
      ...(params.name ? {name: params.name} : {}),
      ...(params.platformId ? {platformId: params.platformId} : {}),
    })

    if (isNil(project)) {
      throw new ActivepiecesError({
        code: ErrorCode.ENTITY_NOT_FOUND,
        params: {
          entityId: params.id,
          entityType: 'project',
        },
      })
    }

    return project
  },

  async getOneOrThrowById(param: { id: string }): Promise<ProjectRole> {
    return this.getOneOrThrow(param)
  }
}
