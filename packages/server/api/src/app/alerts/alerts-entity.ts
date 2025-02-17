import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../database/database-common';
import { Alert } from '@activeboxes/shared';

export const AlertEntity = new EntitySchema<Alert>({
  name: 'alert',
  columns: {
    ...BaseColumnSchemaPart,
    projectId: {
      ...ApIdSchema,
    },
    channel: {
      type: String,
      nullable: false,
    },
    receiver: {
      type: String,
      nullable: false,
    },
  },
})
