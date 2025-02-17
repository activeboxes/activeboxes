import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../database/database-common';
import { Issue } from '@activeboxes/shared';

export const IssueEntity = new EntitySchema<Issue>({
  name: 'issue',
  columns: {
    ...BaseColumnSchemaPart,
    projectId: {
      ...ApIdSchema,
    },
    flowId: {
      ...ApIdSchema,
    },
    status: {
      type: String,
      nullable: false,
    },
    count: {
      type: Number,
      nullable: false,
    },
    lastOccurrence: {
      type: Date,
      nullable: false,
    }
  },
})
