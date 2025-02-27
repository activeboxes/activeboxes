import { createAction } from '@activeboxes/pieces-framework';
import { httpClient, HttpMethod } from '@activeboxes/pieces-common';
import { fliqrAuth } from '../../index';
import { fliqrConfig } from '../common/models';


export const getFliqrAccountDetails = createAction({
  // auth: check https://www.activeboxes.org/docs/developers/piece-reference/authentication,
  name: 'get_fliqr_account_details',
  auth: fliqrAuth,
  displayName: 'Get Business Account details',
  description: 'Get basic account details of business',
  props: {},
  async run(context) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.GET,
      url: `${fliqrConfig.baseUrl}/accounts/me`,
      headers: {
        [fliqrConfig.accessTokenHeaderKey]: context.auth,
        },
    });
    return res.body;
  },
});