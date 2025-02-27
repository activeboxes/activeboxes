import { createAction, Property } from '@activeboxes/pieces-framework';
import { httpClient, HttpMethod } from '@activeboxes/pieces-common';
import { tavilyAuth } from '../../index';

export const searchAction = createAction({
  name: 'search',
  displayName: 'Search',
  description: 'Search for data based on a query.',
  auth: tavilyAuth,
  props: {
    query: Property.LongText({
      displayName: 'Search Query',
      description: 'The search query you want to execute with Tavily.',
      required: true,
    }),
    search_depth: Property.StaticDropdown({
      displayName: 'Search Depth',
      description: 'The depth of the search. It can be "basic" or "advanced".',
      required: false,
      defaultValue: 'basic',
      options: {
        options: [
          { label: 'Basic', value: 'basic' },
          { label: 'Advanced', value: 'advanced' },
        ],
      },
    }),
    topic: Property.StaticDropdown({
      displayName: 'Topic',
      description: 'The category of the search. This will determine which of our agents will be used for the search.',
      required: false,
      defaultValue: 'general',
      options: {
        options: [
          { label: 'General', value: 'general' },
          { label: 'News', value: 'news' },
        ],
      },
    }),
    days: Property.Number({
      displayName: 'Days',
      description: 'The number of days back from the current date to include in the search results. Only available when using the "news" search topic. Default is 3.',
      required: false,
      defaultValue: 3,
    }),
    time_range: Property.StaticDropdown({
      displayName: 'Time Range',
      description: 'The time range back from the current date to include in the search results.',
      required: false,
      options: {
        options: [
          { label: 'Day', value: 'day' },
          { label: 'Week', value: 'week' },
          { label: 'Month', value: 'month' },
          { label: 'Year', value: 'year' },
          { label: 'Day (Short)', value: 'd' },
          { label: 'Week (Short)', value: 'w' },
          { label: 'Month (Short)', value: 'm' },
          { label: 'Year (Short)', value: 'y' },
        ],
      },
    }),
    max_results: Property.Number({
      displayName: 'Maximum Results',
      description: 'The maximum number of search results to return.',
      required: false,
      defaultValue: 5,
    }),
    include_images: Property.Checkbox({
      displayName: 'Include Images',
      description: 'Include a list of query-related images in the response.',
      required: false,
      defaultValue: false,
    }),
    include_image_descriptions: Property.Checkbox({
      displayName: 'Include Image Descriptions',
      description: 'When include_images is set to True, this option adds descriptive text for each image.',
      required: false,
      defaultValue: false,
    }),
    include_answer: Property.Checkbox({
      displayName: 'Include Answer',
      description: 'Include a short answer to original query, generated by an LLM based on Tavily\'s search results.',
      required: false,
      defaultValue: false,
    }),
    include_raw_content: Property.Checkbox({
      displayName: 'Include Raw Content',
      description: 'Include the cleaned and parsed HTML content of each search result.',
      required: false,
      defaultValue: false,
    }),
    include_domains: Property.Array({
      displayName: 'Include Domains',
      description: 'A list of domains to specifically include in the search results.',
      required: false,
    }),
    exclude_domains: Property.Array({
      displayName: 'Exclude Domains',
      description: 'A list of domains to specifically exclude from the search results.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const response = await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: 'https://api.tavily.com/search',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        api_key: auth,
        query: propsValue.query,
        search_depth: propsValue.search_depth,
        topic: propsValue.topic,
        days: propsValue.days,
        time_range: propsValue.time_range,
        max_results: propsValue.max_results,
        include_images: propsValue.include_images,
        include_image_descriptions: propsValue.include_image_descriptions,
        include_answer: propsValue.include_answer,
        include_raw_content: propsValue.include_raw_content,
        include_domains: propsValue.include_domains,
        exclude_domains: propsValue.exclude_domains,
      },
    });

    return response.body;
  },
}); 