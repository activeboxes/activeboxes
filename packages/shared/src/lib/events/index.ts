import { Static, Type } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
import { BaseModelSchema } from '../common';

export enum ApplicationEventName {
  FLOW_CREATED = 'flow.created',
  FLOW_DELETED = 'flow.deleted',
  FLOW_UPDATED = 'flow.updated',
  FLOW_RUN_STARTED = 'flow.run.started',
  FLOW_RUN_FINISHED = 'flow.run.finished',
  FOLDER_CREATED = 'folder.created',
  FOLDER_UPDATED = 'folder.updated',
  FOLDER_DELETED = 'folder.deleted',
  CONNECTION_UPSERTED = 'connection.upserted',
  CONNECTION_DELETED = 'connection.deleted',
  USER_SIGNED_UP = 'user.signed.up',
  USER_SIGNED_IN = 'user.signed.in',
  USER_PASSWORD_RESET = 'user.password.reset',
  USER_EMAIL_VERIFIED = 'user.email.verified',
  SIGNING_KEY_CREATED = 'signing.key.created',
  PROJECT_ROLE_CREATED = 'project.role.created',
  PROJECT_ROLE_DELETED = 'project.role.deleted',
  PROJECT_ROLE_UPDATED = 'project.role.updated',
  PROJECT_RELEASE_CREATED = 'project.release.created',
}

export const ApplicationEvent = Type.Object({
  ...BaseModelSchema,
  action: Type.Enum(ApplicationEventName),
  projectId: Type.Optional(Type.String()),
  userId: Type.Optional(Type.String()),
  userEmail: Type.Optional(Type.String()),
  data: Type.Any(),
});
export type ApplicationEvent = Static<typeof ApplicationEvent>

export const AuthenticationEvent = Type.Any()
export type AuthenticationEvent = Static<typeof AuthenticationEvent>

export const ConnectionEvent = Type.Any()
export type ConnectionEvent = Static<typeof ConnectionEvent>

export const FlowCreatedEvent = Type.Any()
export type FlowCreatedEvent = Static<typeof FlowCreatedEvent>

export const FlowDeletedEvent = Type.Any()
export type FlowDeletedEvent = Static<typeof FlowDeletedEvent>

export const FlowRunEvent = Type.Any()
export type FlowRunEvent = Static<typeof FlowRunEvent>

export const FlowUpdatedEvent = Type.Any()
export type FlowUpdatedEvent = Static<typeof FlowUpdatedEvent>

export const FolderEvent = Type.Any()
export type FolderEvent = Static<typeof FolderEvent>

export const ProjectReleaseEvent = Type.Any()
export type ProjectReleaseEvent = Static<typeof ProjectReleaseEvent>

export const ProjectRoleEvent = Type.Any()
export type ProjectRoleEvent = Static<typeof ProjectRoleEvent>

export const SigningKeyEvent = Type.Any()
export type SigningKeyEvent = Static<typeof SigningKeyEvent>

export const SignUpEvent = Type.Any()
export type SignUpEvent = Static<typeof SignUpEvent>

export const ListAuditEventsRequest = Type.Object({
  projectId: ApId,
  cursor: Type.Optional(Type.String()),
  limit: Type.Optional(Type.Number()),
})
export type ListAuditEventsRequest = Static<typeof ListAuditEventsRequest>

export function summarizeApplicationEvent(event: ApplicationEvent): string {
  // TODO
  return '';
}
