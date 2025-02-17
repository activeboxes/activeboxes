import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { createCredential } from './lib/actions/create-credential';
import { certopusCommon } from './lib/common';

export const certopusAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'API key acquired from your Certopus profile',
});

export const certopus = createPiece({
  displayName: 'Certopus',
  description: 'Your certificates, made simple',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/certopus.png',
  categories: [],
  authors: ["VrajGohil","kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  auth: certopusAuth,
  actions: [
    createCredential,
    createCustomApiCallAction({
      baseUrl: () => certopusCommon.baseUrl, // Replace with the actual base URL
      auth: certopusAuth,
      authMapping: async (auth) => ({
        'x-api-key': `${auth}`,
      }),
    }),
  ],
  triggers: [],
});
