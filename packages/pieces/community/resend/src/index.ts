import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { sendEmail } from './lib/actions/send-email';

export const resendAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
});

export const resend = createPiece({
  displayName: 'Resend',
  description: 'Email for developers',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/resend.png',
  categories: [PieceCategory.BUSINESS_INTELLIGENCE, PieceCategory.MARKETING],
  authors: ["kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  auth: resendAuth,
  actions: [
    sendEmail,
    createCustomApiCallAction({
      baseUrl: () => 'https://api.resend.com',
      auth: resendAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth}`,
      }),
    }),
  ],
  triggers: [],
});
