import { FastifyBaseLogger } from 'fastify';

export enum BillingUsageType {
  AI_TOKENS = 'AI_TOKENS',
}

export const usageService = (log: FastifyBaseLogger) => ({
  async tasksExceededLimit(projectId: String): Promise<boolean> {
    return false
  },
  async aiTokensExceededLimit(projectId: string, number: number): Promise<boolean> {
    return false
  },
  async increaseProjectAndPlatformUsage(param: { projectId: string; incrementBy: number; usageType: any }): Promise<void> {
    return
  }
})
