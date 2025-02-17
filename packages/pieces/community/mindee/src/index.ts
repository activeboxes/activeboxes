import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { mindeePredictDocumentAction } from './lib/actions/predict-document';

export const mindeeAuth = PieceAuth.SecretText({
  displayName: 'Api Key',
  description: `
  #### To obtain access your Api Key
  1. Sign up and log in to Mindee
  2. Go to [API Key page](https://platform.mindee.com/api-keys)
  3. Copy the Key and paste below.
  `,
  required: true,
});

export const mindee = createPiece({
  displayName: 'Mindee',
  description: 'Document automation API',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/mindee.png',
  categories: [PieceCategory.COMMUNICATION],
  authors: ["kanarelo","kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  auth: mindeeAuth,
  actions: [
    mindeePredictDocumentAction,
    createCustomApiCallAction({
      baseUrl: () => 'https://api.mindee.net/v1',
      auth: mindeeAuth,
      authMapping: async (auth) => ({
        Authorization: `Token ${auth}`,
      }),
    }),
  ],
  triggers: [],
});
