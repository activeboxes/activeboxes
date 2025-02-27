import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { triggers } from './lib/triggers';

export const calcomAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'API Key provided by cal.com',
  required: true,
});

export const calcom = createPiece({
  displayName: 'Cal.com',
  description: 'Open-source alternative to Calendly',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/cal.com.png',
  categories: [PieceCategory.PRODUCTIVITY],
  authors: ["kishanprmr","AbdulTheActivePiecer","khaledmashaly","abuaboud"],
  auth: calcomAuth,
  actions: [],
  triggers,
});
