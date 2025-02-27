import { api } from '@/lib/api';
import { ManagedAuthnRequestBody } from '@activeboxes/shared';
import { AuthenticationResponse } from '@activeboxes/shared';

export const managedAuthApi = {
  generateApToken: async (request: ManagedAuthnRequestBody) => {
    return api.post<AuthenticationResponse>(
      `/v1/managed-authn/external-token`,
      request,
    );
  },
};
