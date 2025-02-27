import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { tallyFormsNewSubmission } from './lib/triggers/new-submission';
export const tally = createPiece({
  displayName: 'Tally',
  description: 'Receive form submissions from Tally forms',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.27.1',
  logoUrl: 'https://cdn.activeboxes.org/pieces/tally.png',
  categories: [PieceCategory.FORMS_AND_SURVEYS],
  authors: ["kishanprmr","abuaboud"],
  actions: [],
  triggers: [tallyFormsNewSubmission],
});
