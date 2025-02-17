import { Platform } from '@activeboxes/shared';
import { FastifyBaseLogger } from 'fastify';

export const smtpEmailSender = (log: FastifyBaseLogger) => ({
  isSmtpConfigured(platform: Platform) {
    return false;
  },
  async validateOrThrow(smtp: any): Promise<void> {
    throw new Error("SMTP not implemented yet")
  }
})
