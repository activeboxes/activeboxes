import { createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { uploadPhoto } from './lib/actions/upload-photo';
import { uploadReel } from './lib/actions/upload-reel';
import { instagramCommon } from './lib/common';

export const instagramBusiness = createPiece({
  displayName: 'Instagram for Business',
  description: 'Grow your business on Instagram',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/instagram.png',
  categories: [PieceCategory.BUSINESS_INTELLIGENCE],
  authors: ["kishanprmr","MoShizzle","abuaboud"],
  auth: instagramCommon.authentication,
  actions: [uploadPhoto, uploadReel],
  triggers: [],
});
