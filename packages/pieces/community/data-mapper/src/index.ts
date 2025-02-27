import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { advancedMapping } from './lib/actions/advanced-mapping';

export const dataMapper = createPiece({
  displayName: 'Data Mapper',
  description: 'tools to manipulate data structure',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/data-mapper.png',
  auth: PieceAuth.None(),
  categories: [PieceCategory.CORE],
  authors: ["kishanprmr","MoShizzle","AbdulTheActivePiecer","khaledmashaly","abuaboud"],
  actions: [advancedMapping],
  triggers: [],
});
