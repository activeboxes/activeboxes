import { getAccessTokenOrThrow } from '@activeboxes/pieces-common';
import { Client } from 'intercom-client';
import {
  OAuth2PropertyValue,
  OAuth2Props,
  Property,
} from '@activeboxes/pieces-framework';

export const intercomClient = (auth: OAuth2PropertyValue<OAuth2Props>) => {
  const client = new Client({
    tokenAuth: { token: getAccessTokenOrThrow(auth) },
  });
  client.useRequestOpts({
    baseURL: `https://api.${auth.props?.['region']}.io`,
  });
  return client;
};

export const commonProps = {
  admins: <R extends boolean>(options: { displayName: string; required: R }) =>
    Property.Dropdown<string, R>({
      displayName: options.displayName,
      required: options.required,
      options: async ({ auth }) => {
        if (!auth) {
          return {
            options: [],
            disabled: true,
            placeholder: 'Please connect your account first',
          };
        }
        const client = intercomClient(auth as OAuth2PropertyValue);
        const adminsResponse = await client.admins.list();

        return {
          options: adminsResponse.admins.map((c) => {
            const res = { value: c.id, label: '' };
            if (c.name) {
              res.label = c.name;
            } else if (c.email) {
              res.label = c.email;
            } else {
              res.label = c.id;
            }
            return res;
          }),
        };
      },
      refreshers: [],
    }),
  contacts: <R extends boolean>(options: {
    displayName: string;
    required: R;
  }) =>
    Property.Dropdown<string, R>({
      displayName: options.displayName,
      required: options.required,
      options: async ({ auth }) => {
        if (!auth) {
          return {
            options: [],
            disabled: true,
            placeholder: 'Please connect your account first',
          };
        }
        const client = intercomClient(auth as OAuth2PropertyValue);
        const contactsResponse = await client.contacts.list({});

        return {
          options: contactsResponse.data.map((c) => {
            const res = { value: c.id, label: '' };
            if (c.name) {
              res.label = c.name;
            } else if (c.email) {
              res.label = c.email;
            } else {
              res.label = c.id;
            }
            return res;
          }),
        };
      },
      refreshers: [],
    }),
};
