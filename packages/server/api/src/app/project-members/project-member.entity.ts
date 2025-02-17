import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from '../database/database-common';
import { ProjectMember } from '@activeboxes/shared';

export { ProjectMember }

export const ProjectMemberEntity = new EntitySchema<ProjectMember>({
  name: 'project_member',
  columns: {
    ...BaseColumnSchemaPart,
    userId: {
      type: String,
      nullable: false,
    }
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'user',
      cascade: true,
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'userId',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'fk_project_member_user_id',
      },
    },
  },
})
