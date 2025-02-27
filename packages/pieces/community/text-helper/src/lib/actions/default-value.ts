import { createAction, Property } from '@activeboxes/pieces-framework';
import { isEmpty } from '@activeboxes/shared';

export const defaultValue = createAction({
  // auth: check https://www.activeboxes.org/docs/developers/piece-reference/authentication,
  name: 'defaultValue',
  errorHandlingOptions: {
    continueOnFailure: {
      hide: true,
    },
    retryOnFailure: {
      hide: true,
    },
  },
  displayName: 'Use Default Value if Input is Empty',
  description:
    'Checks your input and returns the default value, if the input is an empty text or list',
  props: {
    value: Property.ShortText({
      displayName: 'Enter value',
      description: 'Enter value',
      required: false,
    }),
    defaultString: Property.ShortText({
      displayName: 'Default Value',
      required: true,
    }),
  },
  async run(context) {
    // Action logic here
    const { value, defaultString } = context.propsValue;
    if (isEmpty(value)) {
      return defaultString;
    }
    return value;
  },
});
