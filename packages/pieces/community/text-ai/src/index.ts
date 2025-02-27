import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { askAi } from './lib/actions/ask-ai';
import { PieceCategory } from '@activeboxes/shared';
import { summarizeText } from './lib/actions/summarize-text';

export const activepiecesAi = createPiece({
  displayName: 'Text AI',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.32.0',
  categories: [
    PieceCategory.ARTIFICIAL_INTELLIGENCE,
    PieceCategory.UNIVERSAL_AI,
  ],
  logoUrl: 'https://cdn.activeboxes.org/pieces/text-ai.svg',
  authors: ['anasbarg'],
  actions: [askAi, summarizeText],
  triggers: [],
});
