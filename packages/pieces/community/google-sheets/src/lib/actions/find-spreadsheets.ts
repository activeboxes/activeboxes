import { createAction, Property } from '@activeboxes/pieces-framework';
import { httpClient, HttpMethod, AuthenticationType } from '@activeboxes/pieces-common';
import { googleSheetsCommon } from '../common/common';
import { googleSheetsAuth } from '../..';

export const findSpreadsheets = createAction({
  name: 'find_spreadsheets',
  displayName: 'Find Spreadsheet(s)',
  description: 'Find spreadsheet(s) by name.',
  auth: googleSheetsAuth,
  props: {
    include_team_drives: googleSheetsCommon.include_team_drives,
    spreadsheet_name: Property.ShortText({
      displayName: 'Spreadsheet Name',
      description: 'The name of the spreadsheet(s) to find.',
      required: true,
    }),
    exact_match: Property.Checkbox({
      displayName: 'Exact Match',
      description: 'If true, only return spreadsheets that exactly match the name. If false, return spreadsheets that contain the name.',
      required: false,
      defaultValue: false,
    }),
  },
  async run({ propsValue, auth }) {
    const searchValue = propsValue.spreadsheet_name;
    const queries = [
      "mimeType='application/vnd.google-apps.spreadsheet'",
      'trashed=false',
    ];

    if (propsValue.exact_match) {
      queries.push(`name = '${searchValue}'`);
    } else {
      queries.push(`name contains '${searchValue}'`);
    }

    const response = await httpClient.sendRequest<{files: any[]}>({
      method: HttpMethod.GET,
      url: 'https://www.googleapis.com/drive/v3/files',
      queryParams: {
        q: queries.join(' and '),
        includeItemsFromAllDrives: propsValue.include_team_drives ? 'true' : 'false',
        supportsAllDrives: 'true',
        fields: 'files(id,name,webViewLink,createdTime,modifiedTime)',
      },
      authentication: {
        type: AuthenticationType.BEARER_TOKEN,
        token: auth.access_token,
      },
    });

    return {
      found: response.body.files.length > 0,
      spreadsheets: response.body.files,
    };
  },
});
