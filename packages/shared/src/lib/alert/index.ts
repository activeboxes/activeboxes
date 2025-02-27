import { Static, Type } from '@sinclair/typebox';
import { ApId, BaseModelSchema } from '@activeboxes/shared';

export enum AlertChannel {
  EMAIL = 'EMAIL',
}

export const Alert = Type.Object({
  ...BaseModelSchema,
  projectId: ApId,
  channel: Type.Enum(AlertChannel),
  receiver: Type.String(),
})

export type Alert = Static<typeof Alert>


export const ListAlertsParams = Type.Object({
  projectId: ApId,
  cursor: Type.Optional(Type.String()),
  limit: Type.Optional(Type.Number()),
})

export type ListAlertsParams = Static<typeof ListAlertsParams>


export const CreateAlertParams = Type.Object({
  projectId: ApId,
  channel: Type.String(),
  receiver: Type.String()
})

export type CreateAlertParams = Static<typeof CreateAlertParams>
