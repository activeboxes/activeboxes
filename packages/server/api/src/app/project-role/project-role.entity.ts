import { EntitySchema } from 'typeorm'
import { ProjectRole } from '@activeboxes/shared';
import { BaseColumnSchemaPart } from '../database/database-common';

export type ProjectRoleSchema = ProjectRole

export const ProjectRoleEntity = new EntitySchema<ProjectRoleSchema>({
  name: 'project_role',
  columns: {
    ...BaseColumnSchemaPart,
    name: {
      type: String,
      nullable: false,
    },
    permissions: {
      type: String,
      nullable: false,
    },
    platformId: {
      type: String,
    },
    type: {
      type: String,
      nullable: false,
    },
  },
})
