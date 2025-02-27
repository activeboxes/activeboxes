import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { generatePassword } from './lib/actions/generate-password';
import { hashText } from './lib/actions/hash-text';
import { hmacSignature } from './lib/actions/hmac-signature';

export const Crypto = createPiece({
  displayName: 'Crypto',
  description: 'Generate random passwords and hash existing text',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/crypto.png',
  categories: [PieceCategory.CORE],
  authors: ['AbdullahBitar', 'kishanprmr', 'abuaboud', 'matthieu-lombard', 'antonyvigouret'],
  actions: [hashText, hmacSignature, generatePassword],
  triggers: [],
});
