import { FastifyBaseLogger } from 'fastify';
import { ProjectId, UserInvitation } from '@activeboxes/shared';

export const emailService = (log: FastifyBaseLogger) => ({
  async sendExceedFailureThresholdAlert(projectId: ProjectId, displayName: string): Promise<void> {
    log.error("Too many failures in flow " + displayName + ", disabling it...")
    return
  },
  async sendInvitation(invitation: { userInvitation: UserInvitation; invitationLink: string }): Promise<void> {
    // TODO
    return;
  }
})
