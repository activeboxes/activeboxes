import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { createCustomApiCallAction } from '@activeboxes/pieces-common';

export const ashbyAuth = PieceAuth.CustomAuth({
  required: true,
  props: {
    apiKey: PieceAuth.SecretText({
      displayName: 'API key',
      required: true,
    }),
  },
});

export const ashby = createPiece({
  displayName: 'Ashby',
  auth: ashbyAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activeboxes.org/pieces/ashby.png',
  authors: ['AdamSelene'],
  actions: [
    createCustomApiCallAction({
      baseUrl: () => `https://api.ashbyhq.com/`,
      auth: ashbyAuth,
      authMapping: async (auth) => {
        const { apiKey } = auth as { apiKey: string };
        return {
          Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString(
            'base64'
          )}`,
          'Content-Type': 'application/json',
        };
      },
    }),
  ],
  triggers: [],
});
