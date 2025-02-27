import {
  createPiece,
  OAuth2PropertyValue,
  PieceAuth,
} from '@activeboxes/pieces-framework';

import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import { PieceCategory } from '@activeboxes/shared';
import { common } from './lib/common';
import { newComment } from './lib/triggers/new-comment';
import { newFile } from './lib/triggers/new-file';
import { newFolder } from './lib/triggers/new-folder';

export const boxAuth = PieceAuth.OAuth2({
  required: true,
  authUrl: 'https://account.box.com/api/oauth2/authorize',
  tokenUrl: 'https://api.box.com/oauth2/token',
  scope: ['manage_webhook', 'root_readonly', 'root_readwrite'],
});

export const box = createPiece({
  displayName: 'Box',
  description: 'Secure content management and collaboration',

  auth: boxAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/box.png',
  categories: [PieceCategory.CONTENT_AND_FILES],
  authors: ["kishanprmr","MoShizzle","abuaboud"],
  actions: [
    createCustomApiCallAction({
      baseUrl: () => common.baseUrl,
      auth: boxAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${(auth as OAuth2PropertyValue).access_token}`,
      }),
    }),
  ],
  triggers: [newFile, newFolder, newComment],
});
