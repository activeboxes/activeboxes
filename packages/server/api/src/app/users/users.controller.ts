import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { userService } from '../user/user-service';
import { userIdentityService } from '../authentication/user-identity/user-identity-service';
import { UserWithMetaInformationAndProject } from '@activeboxes/shared';

export const usersController: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/me', GetMeRequest, async (req, res): Promise<UserWithMetaInformationAndProject> => {
    const user = await userService.getOneOrFail({ id: req.principal.id })
    const identity = await userIdentityService(app.log).getOneOrFail({ id: user.identityId })

    return {
      id: user.id,
      email: identity.email,
      firstName: identity.firstName,
      status: user.status,
      externalId: user.externalId,
      platformId: user.platformId,
      platformRole: user.platformRole,
      lastName: identity.lastName,
      created: user.created,
      updated: user.updated,
      projectId: req.principal.projectId,
      trackEvents: identity.trackEvents,
      newsLetter: identity.newsLetter,
      verified: identity.verified,
    }
  })
}

const GetMeRequest = {}
