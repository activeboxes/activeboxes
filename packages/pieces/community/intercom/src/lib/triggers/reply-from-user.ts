import {
  createTrigger,
  TriggerStrategy,
} from '@activeboxes/pieces-framework';
import { intercomAuth } from '../..';
import { intercomClient } from '../common';

export const replyFromUser = createTrigger({
  // auth: check https://www.activeboxes.org/docs/developers/piece-reference/authentication,
  name: 'replyFromUser',
  displayName: 'Reply from a user or lead',
  description:
    'Triggers when a reply is received from a user or lead (not an admin)',
  props: {},
  sampleData: undefined,
  auth: intercomAuth,
  type: TriggerStrategy.APP_WEBHOOK,
  async onEnable(context) {
    const client = intercomClient(context.auth);
    const response: { app: { id_code: string } } = await client.get({
      url: '/me',
    });
    context.app.createListeners({
      events: ['conversation.user.replied'],
      identifierValue: response['app']['id_code'],
    });
  },
  async onDisable(context) {
    // implement webhook deletion logic
  },
  async run(context) {
    return [context.payload.body];
  },
});
