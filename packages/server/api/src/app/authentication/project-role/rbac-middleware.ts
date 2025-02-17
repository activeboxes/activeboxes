import { FastifyBaseLogger, FastifyRequest } from 'fastify';
import { FlowOperationType, Permission, Principal } from '@activeboxes/shared';

export const rbacMiddleware = async (
  request: FastifyRequest,
): Promise<void> => {
  // TODO
  return
}

export const assertUserHasPermissionToFlow = async (
  principal: Principal,
  type: FlowOperationType,
  log: FastifyBaseLogger,
): Promise<void> => {
  // TODO
  return
}

export const assertRoleHasPermission = async (principal: Principal, permission: Permission, log: FastifyBaseLogger): Promise<void> => {
  // TODO
  return
}
