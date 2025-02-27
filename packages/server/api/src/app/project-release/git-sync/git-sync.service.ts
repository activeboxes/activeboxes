import { FastifyBaseLogger } from 'fastify';

export const gitRepoService = (log: FastifyBaseLogger) => ({
  onFlowDeleted(flow: { flowId: any; userId: any; projectId: any; log: FastifyBaseLogger }): Promise<void> {
    // TODO
    return Promise.resolve();
  }
})
