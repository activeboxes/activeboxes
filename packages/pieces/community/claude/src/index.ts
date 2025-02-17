import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import {
  AI_PROVIDERS_MAKRDOWN,
  createCustomApiCallAction,
} from '@activeboxes/pieces-common';
import { askClaude } from './lib/actions/send-prompt';
import { baseUrl } from './lib/common/common';
import { PieceCategory } from '@activeboxes/shared';
import { extractStructuredDataAction } from './lib/actions/extract-structured-data';

export const claudeAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: AI_PROVIDERS_MAKRDOWN.anthropic,
});

export const claude = createPiece({
  displayName: 'Anthropic Claude',
  auth: claudeAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/claude.png',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ['dennisrongo','kishanprmr'],
  actions: [
    askClaude,
    extractStructuredDataAction,
    createCustomApiCallAction({
      auth: claudeAuth,
      baseUrl: () => baseUrl,
      authMapping: async (auth) => {
        return {
          'x-api-key': `${auth}`,
        };
      },
    }),
  ],
  triggers: [],
});
