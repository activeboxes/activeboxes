import { networkUtils, WorkerSystemProp } from '@activeboxes/server-shared';
import { system } from '../helper/system/system';

export const domainHelper = {
  async getPublicApiUrl(param: { path?: string, platformId?: string }): Promise<string> {
    return networkUtils.combineUrl(system.getOrThrow(WorkerSystemProp.FRONTEND_URL) + '/api', param.path ?? '')
  },
  async getPublicUrl(param: { path?: string, platformId?: string }) {
    return networkUtils.combineUrl(system.getOrThrow(WorkerSystemProp.FRONTEND_URL), param.path ?? '')
  }
}
