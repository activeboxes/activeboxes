import { createCustomApiCallAction } from '@activeboxes/pieces-common';
import {
  PieceAuth,
  Property,
  createPiece,
} from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { textToImage } from './lib/actions/text-to-image';

export const stabilityAiAuth = PieceAuth.CustomAuth({
  description: `Please visit https://platform.stability.ai/docs/getting-started/authentication to get your API Key`,
  props: {
    api_key: Property.ShortText({
      displayName: 'API Key',
      required: true,
    }),
  },
  required: true,
});

export const stabilityAi = createPiece({
  displayName: 'Stability AI',
  description:
    'Generative AI video model based on the image model Stable Diffusion.',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/stability-ai.png',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ["Willianwg","camilou","kishanprmr","MoShizzle","AbdulTheActivePiecer","khaledmashaly","abuaboud"],
  auth: stabilityAiAuth,
  actions: [
    textToImage,
    createCustomApiCallAction({
      baseUrl: () => 'https://api.stability.ai/v1',
      auth: stabilityAiAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${(auth as { api_key: string }).api_key}`,
      }),
    }),
  ],
  triggers: [],
});
