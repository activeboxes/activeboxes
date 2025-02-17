import { Static, Type } from '@sinclair/typebox';
import { BaseModelSchema } from '../common';

export enum IssueStatus {
  ONGOING = 'ONGOING',
  RESOLEVED = 'RESOLEVED',
}

export const Issue = Type.Object({
  ...BaseModelSchema,
  projectId: Type.String(),
  flowId: Type.String(),
  status: Type.Enum(IssueStatus),
  count: Type.Number(),
  lastOccurrence: Type.Date(),
})
export type Issue = Static<typeof Issue>
