import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { addTag } from './lib/add-tag';

export const tags = createPiece({
  displayName: 'Tags',
  description: 'Add custom tags to your run for filtration',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/tags.svg',
  categories: [PieceCategory.CORE],
  authors: ["kishanprmr","MoShizzle","abuaboud"],
  actions: [addTag],
  triggers: [],
});
