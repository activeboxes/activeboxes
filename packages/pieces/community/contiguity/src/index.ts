import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { sendSMS } from './lib/actions/send-sms';

export const contigAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'API key acquired from your Contiguity settings',
});

export const contiguity = createPiece({
  displayName: 'Contiguity',
  description: 'An SMS service for your needs - quick and simple',
  auth: contigAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/contiguity.png',
  authors: ["Owlcept","Ozak93","kishanprmr","MoShizzle","abuaboud"],
  categories: [PieceCategory.MARKETING],
  actions: [
    sendSMS,
    createCustomApiCallAction({
      baseUrl: () => 'https://api.contiguity.com/v1', // Replace with the actual base URL
      auth: contigAuth,
      authMapping: async (auth) => ({
        authorization: `Token ${auth}`,
      }),
    }),
  ],
  triggers: [],
});
