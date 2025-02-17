import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { trackEvent } from './lib/actions/track-event';

export const mixpanelAuth = PieceAuth.SecretText({
  displayName: 'Mixpanel token',
  required: true,
  description: `
      The Mixpanel token associated with your project. You can find your Mixpanel token in the project settings dialog in the Mixpanel app.
    `,
});

export const mixpanel = createPiece({
  displayName: 'Mixpanel',
  description: 'Simple and powerful product analytics that helps everyone make better decisions',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/mixpanel.png',
  authors: ["yann120","kishanprmr","MoShizzle","abuaboud"],
  auth: mixpanelAuth,
  categories: [PieceCategory.BUSINESS_INTELLIGENCE],
  actions: [
    trackEvent,
    createCustomApiCallAction({
      baseUrl: () => 'https://api.mixpanel.com',
      auth: mixpanelAuth,
      authMapping: async (auth) => ({
        Authorization: `Basic ${Buffer.from(auth as string).toString(
          'base64'
        )}`,
      }),
    }),
  ],
  triggers: [],
});
