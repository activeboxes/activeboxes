import { pipedriveAuth } from '../../index';
import { createAction, Property } from '@activeboxes/pieces-framework';
import { pipedrivePaginatedApiCall } from '../common';
import { HttpMethod } from '@activeboxes/pieces-common';
import { isNil } from '@activeboxes/shared';

export const findNotesAction = createAction({
	auth: pipedriveAuth,
	name: 'find-notes',
	displayName: 'Find Notes',
	description: 'Finds notes by Deal,Lead,Person, or Organization ID.',
	props: {
		objectType: Property.StaticDropdown({
			displayName: 'Search By',
			required: true,
			options: {
				disabled: false,
				options: [
					{
						label: 'Deal',
						value: 'deal_id',
					},
					{
						label: 'Lead',
						value: 'lead_id',
					},
					{
						label: 'Person',
						value: 'person_id',
					},
					{
						label: 'Organization',
						value: 'org_id',
					},
				],
			},
		}),
		objectId: Property.Number({
			displayName: 'ID',
			required: true,
		}),
	},
	async run(context) {
		const response = await pipedrivePaginatedApiCall({
			accessToken: context.auth.access_token,
			apiDomain: context.auth.data['api_domain'],
			method: HttpMethod.GET,
			resourceUri: `/notes`,
			query: {
				sort: 'update_time DESC',
			},
		});

		if (isNil(response)) {
			return {
				found: false,
				data: [],
			};
		}

		return {
			found: true,
			data: response,
		};
	},
});
