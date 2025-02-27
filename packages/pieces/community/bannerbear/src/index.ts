import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { bannerbearCreateImageAction } from './lib/actions/create-image';

export const bannerbearAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Bannerbear API Key',
  required: true,
});

export const bannerbear = createPiece({
  displayName: 'Bannerbear',
  description: 'Automate image generation',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/bannerbear.png',
  categories: [PieceCategory.MARKETING],
  authors: ["kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  auth: bannerbearAuth,
  actions: [
    bannerbearCreateImageAction,
    createCustomApiCallAction({
      baseUrl: () => 'https://sync.api.bannerbear.com/v2',
      auth: bannerbearAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth}`,
      }),
    }),
  ],
  triggers: [],
});
