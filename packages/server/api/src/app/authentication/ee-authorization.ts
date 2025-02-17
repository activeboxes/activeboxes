import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { PlatformWithoutSensitiveData } from '@activeboxes/shared';

export const platformMustBeOwnedByCurrentUser = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  // TODO
  return
}

export const platformMustHaveFeatureEnabled = (hasProjectRoles: (platform: PlatformWithoutSensitiveData) => boolean) =>
  async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    // TODO
    return
  }
