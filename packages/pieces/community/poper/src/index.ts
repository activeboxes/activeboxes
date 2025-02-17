import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { newLead } from './lib/triggers/new-lead';
import { PieceCategory } from '@activeboxes/shared';

export const poper = createPiece({
  displayName: 'Poper',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.30.0',
  categories: [PieceCategory.MARKETING],
  description:
    'AI Driven Pop-up Builder that can convert visitors into customers,increase subscriber count, and skyrocket sales.',
  logoUrl: 'https://cdn.activeboxes.org/pieces/poper.png',
  authors: ['thirstycode'],
  actions: [],
  triggers: [newLead],
});
