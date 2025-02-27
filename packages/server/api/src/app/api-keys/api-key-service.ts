import { cryptoUtils } from '@activeboxes/server-shared';
import { repoFactory } from '../core/db/repo-factory';
import { ApiKeyEntity } from './api-key-entity';

export const apiKeyRepo = repoFactory(ApiKeyEntity)

export const apiKeyService = {
  getByValueOrThrow(value: string) {
    return apiKeyRepo().findOneByOrFail({
      hashedValue: cryptoUtils.hashSHA256(value),
    })
  }
}
