import { ApiKey, Platform } from '@activeboxes/shared';
import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../database/database-common';

type ApiKeySchema = ApiKey & {
  platform: Platform,
}

export const ApiKeyEntity = new EntitySchema<ApiKeySchema>({
  name: 'api_key',
  columns: {
    ...BaseColumnSchemaPart,
    platformId: {
      ...ApIdSchema,
      nullable: false,
    },
    displayName: {
      type: String,
      nullable: false,
    },
    hashedValue: {
      type: String,
      nullable: false,
    },
  },
  indices: [],
  relations: {
    platform: {
      type: 'many-to-one',
      target: 'platform',
      cascade: true,
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'platformId',
        foreignKeyConstraintName: 'fk_api_key_platform_id',
      },
    },
  },
})
