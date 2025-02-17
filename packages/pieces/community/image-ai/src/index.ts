import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { generateImage } from './lib/actions/generate-image';

export const imageAi = createPiece({
  displayName: 'Image AI',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/image-ai.svg',
  categories: [
    PieceCategory.ARTIFICIAL_INTELLIGENCE,
    PieceCategory.UNIVERSAL_AI,
  ],
  authors: ['kishanprmr'],
  actions: [generateImage],
  triggers: [],
});
