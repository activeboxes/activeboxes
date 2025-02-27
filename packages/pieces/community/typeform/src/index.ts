import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import {
  OAuth2PropertyValue,
  PieceAuth,
  createPiece,
} from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { typeformNewSubmission } from './lib/trigger/new-submission';

export const typeformAuth = PieceAuth.OAuth2({
  required: true,
  tokenUrl: 'https://api.typeform.com/oauth/token',
  authUrl: 'https://admin.typeform.com/oauth/authorize',
  scope: ['webhooks:write', 'forms:read'],
});

export const typeform = createPiece({
  displayName: 'Typeform',
  description: 'Create beautiful online forms and surveys',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/typeform.png',
  categories: [PieceCategory.FORMS_AND_SURVEYS],
  actions: [
    createCustomApiCallAction({
      baseUrl: () => 'https://api.typeform.com',
      auth: typeformAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${(auth as OAuth2PropertyValue).access_token}`,
      }),
    }),
  ],
  auth: typeformAuth,
  authors: ["ashrafsamhouri","kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  triggers: [typeformNewSubmission],
});
