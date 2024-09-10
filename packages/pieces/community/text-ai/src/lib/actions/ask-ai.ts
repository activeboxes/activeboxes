import { AI, AIChatMessage, AIChatRole, AiProviders } from '@activepieces/pieces-common';
import { createAction, Property } from '@activepieces/pieces-framework';
import { isNil } from '@activepieces/shared';

export const askAi = createAction({
  name: 'askAi',
  displayName: 'Ask AI',
  description: '',
  props: {
    provider: Property.StaticDropdown({
      displayName: 'Provider',
      required: true,
      options: {
        disabled: false,
        options: AiProviders,
      },
    }),
    model: Property.Dropdown({
      displayName: 'Model',
      required: true,
      refreshers: ['provider'],
      async options(propsValue, ctx) {
        const provider = propsValue['provider'];
        const models = AiProviders.find((p) => p.value === provider)?.models;
        return {
          disabled: isNil(models),
          options: models ?? [],
        };
      },
    }),
    prompt: Property.LongText({
      displayName: 'Prompt',
      required: true,
    }),
    conversationKey: Property.ShortText({
      displayName: 'Conversation Key',
      required: false,
    }),
    creativity: Property.Number({
      displayName: 'Creativity',
      required: false,
      defaultValue: 100,
      description:
        'Controls the creativity of the AI response. A higher value will make the AI more creative and a lower value will make it more deterministic.',
    }),
    maxTokens: Property.Number({
      displayName: 'Max Tokens',
      required: false,
      defaultValue: 2000,
    }),
  },
  async run(context) {
    const provider = context.propsValue.provider;

    const ai = AI({ provider, server: context.server });

    const storage = context.store;

    const conversationKey = context.propsValue.conversationKey
      ? `ask-ai-conversation:${context.propsValue.conversationKey}`
      : null;

    let conversation: { messages: AIChatMessage[] } | undefined = undefined;
    if (conversationKey) {
      conversation = (await storage.get<{ messages: AIChatMessage[] }>(
        conversationKey
      )) ?? { messages: [] };
      if (!conversation) {
        await storage.put(conversationKey, { messages: [] });
      }
    }

    const response = await ai.chat.text({
      model: context.propsValue.model,
      messages: conversation?.messages
        ? [
            ...conversation.messages,
            {
              role: AIChatRole.USER,
              content: context.propsValue.prompt,
            },
          ]
        : [{ role: AIChatRole.USER, content: context.propsValue.prompt }],
      creativity: context.propsValue.creativity,
      maxTokens: context.propsValue.maxTokens,
    });

    conversation?.messages.push({
      role: AIChatRole.USER,
      content: context.propsValue.prompt,
    });

    conversation?.messages.push({
      role: AIChatRole.ASSISTANT,
      content: response.choices[0].content,
    });

    if (conversationKey) {
      await storage.put(conversationKey, conversation);
    }

    return response;
  },
});
