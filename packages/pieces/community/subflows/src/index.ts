import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { callFlow } from './lib/actions/call-flow';
import { callableFlow } from './lib/triggers/callable-flow';
import { response } from './lib/actions/respond';
import { PieceCategory } from '@activeboxes/shared';

export const flows = createPiece({
  displayName: 'Sub Flows',
  description: 'Trigger and call another sub flow.',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.32.4',
  categories: [PieceCategory.CORE, PieceCategory.FLOW_CONTROL],
  logoUrl: 'https://cdn.activeboxes.org/pieces/flows.svg',
  authors: ['hazemadelkhalel'],
  actions: [callFlow, response],
  triggers: [callableFlow],
});
