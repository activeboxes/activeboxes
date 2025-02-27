import { createPiece, PieceAuth } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { onChatSubmission } from './lib/triggers/chat-trigger';
import { onFormSubmission } from './lib/triggers/form-trigger';
import { returnResponse } from './lib/actions/return-response';

export const forms = createPiece({
  displayName: 'Human Input',
  description: 'Trigger a flow through human input.',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.37.6',
  categories: [PieceCategory.CORE],
  logoUrl: 'https://cdn.activeboxes.org/pieces/human-input.svg',
  authors: ['anasbarg', 'MoShizzle', 'abuaboud'],
  actions: [returnResponse],
  triggers: [onFormSubmission, onChatSubmission],
});
