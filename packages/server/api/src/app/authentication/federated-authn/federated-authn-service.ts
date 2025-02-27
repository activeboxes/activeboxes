import { FastifyBaseLogger } from 'fastify';

export const federatedAuthnService = (log: FastifyBaseLogger) => ({
  async getThirdPartyRedirectUrl(param: undefined): Promise<string> {
    return '';
  }
})
