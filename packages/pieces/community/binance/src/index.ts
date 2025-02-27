import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { fetchCryptoPairPrice } from './lib/actions/fetch-pair-price';

export const binance = createPiece({
  displayName: 'Binance',
  description: 'Fetch the price of a crypto pair from Binance',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activeboxes.org/pieces/binance.png',
  categories: [],
  auth: PieceAuth.None(),
  actions: [fetchCryptoPairPrice],
  authors: ["kishanprmr","khaledmashaly","abuaboud"],
  triggers: [],
});
