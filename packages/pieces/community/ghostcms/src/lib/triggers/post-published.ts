import { TriggerStrategy, createTrigger } from '@activeboxes/pieces-framework';

import { ghostAuth } from '../..';
import { common } from '../common';

export const postPublished = createTrigger({
  auth: ghostAuth,
  name: 'post_published',
  displayName: 'Post Published',
  description: 'Triggers when a post is published',
  type: TriggerStrategy.WEBHOOK,
  props: {},
  async onEnable(context) {
    const webhookData: any = await common.subscribeWebhook(
      context.auth,
      'post.published',
      context.webhookUrl
    );

    await context.store?.put('_post_published_trigger', {
      webhookId: webhookData.webhooks[0].id,
    });
  },
  async onDisable(context) {
    const response: {
      webhookId: string;
    } | null = await context.store?.get('_post_published_trigger');

    if (response !== null && response !== undefined) {
      await common.unsubscribeWebhook(context.auth, response.webhookId);
    }
  },
  async run(context) {
    return [context.payload.body];
  },

  sampleData: {
    post: {
      current: {
        id: '64be83c424cb9a0001f49f1d',
        url: 'https://test-publication.ghost.io/test-post/',
        html: '<p>Hello my friends</p><p></p><p>this is testing</p>',
        slug: 'test-post',
        tags: [],
        uuid: '77afb2c2-af1a-4a7f-bebc-fa1e314579d0',
        count: {
          clicks: 0,
          negative_feedback: 0,
          positive_feedback: 0,
        },
        tiers: [
          {
            id: '64be4f5a03946b00098ef8f4',
            name: 'Free',
            slug: 'free',
            type: 'free',
            active: true,
            currency: null,
            created_at: '2023-07-24T10:15:54.000Z',
            trial_days: 0,
            updated_at: '2023-07-24T10:15:54.000Z',
            visibility: 'public',
            description: null,
            yearly_price: null,
            monthly_price: null,
            yearly_price_id: null,
            monthly_price_id: null,
            welcome_page_url: null,
          },
          {
            id: '64be4f5a03946b00098ef8f5',
            name: 'Test Publication',
            slug: 'default-product',
            type: 'paid',
            active: true,
            currency: 'usd',
            created_at: '2023-07-24T10:15:54.000Z',
            trial_days: 0,
            updated_at: '2023-07-24T10:15:54.000Z',
            visibility: 'public',
            description: null,
            yearly_price: 5000,
            monthly_price: 500,
            yearly_price_id: null,
            monthly_price_id: null,
            welcome_page_url: null,
          },
        ],
        title: 'Test Post',
        status: 'published',
        authors: [
          {
            id: '1',
            bio: null,
            url: 'https://test-publication.ghost.io/author/slug/',
            name: 'First Last',
            slug: 'slug',
            tour: null,
            email: 'my@email.com',
            roles: [
              {
                id: '64be4f5903946b00098ef8eb',
                name: 'Owner',
                created_at: '2023-07-24T10:15:53.000Z',
                updated_at: '2023-07-24T10:15:53.000Z',
                description: 'Blog Owner',
              },
            ],
            status: 'active',
            twitter: null,
            website: null,
            facebook: null,
            location: null,
            last_seen: '2023-07-24T13:05:18.000Z',
            created_at: '2023-07-24T10:15:53.000Z',
            meta_title: null,
            updated_at: '2023-07-24T13:05:18.000Z',
            cover_image: null,
            accessibility: '{"nightShift":true}',
            profile_image:
              'https://www.gravatar.com/avatar/123123123?s=250&r=x&d=mp',
            meta_description: null,
            comment_notifications: true,
            mention_notifications: true,
            milestone_notifications: true,
            free_member_signup_notification: true,
            paid_subscription_started_notification: true,
            paid_subscription_canceled_notification: false,
          },
        ],
        excerpt: 'Hello my friends\n\n\n\nthis is testing',
        featured: false,
        og_image: null,
        og_title: null,
        mobiledoc:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Hello my friends"]]],[1,"p",[]],[1,"p",[[0,[],0,"this is testing"]]]],"ghostVersion":"4.0"}',
        plaintext: 'Hello my friends\n\n\n\nthis is testing',
        comment_id: '64be83c424cb9a0001f49f1d',
        created_at: '2023-07-24T13:59:32.000Z',
        email_only: false,
        meta_title: null,
        updated_at: '2023-07-24T13:59:43.000Z',
        visibility: 'public',
        frontmatter: null,
        primary_tag: null,
        published_at: '2023-07-24T13:59:43.000Z',
        reading_time: 0,
        canonical_url: null,
        email_segment: 'all',
        email_subject: null,
        feature_image: null,
        twitter_image: null,
        twitter_title: null,
        custom_excerpt: null,
        og_description: null,
        post_revisions: [],
        primary_author: {
          id: '1',
          bio: null,
          url: 'https://test-publication.ghost.io/author/slug/',
          name: 'First Last',
          slug: 'slug',
          tour: null,
          email: 'my@email.com',
          roles: [
            {
              id: '64be4f5903946b00098ef8eb',
              name: 'Owner',
              created_at: '2023-07-24T10:15:53.000Z',
              updated_at: '2023-07-24T10:15:53.000Z',
              description: 'Blog Owner',
            },
          ],
          status: 'active',
          twitter: null,
          website: null,
          facebook: null,
          location: null,
          last_seen: '2023-07-24T13:05:18.000Z',
          created_at: '2023-07-24T10:15:53.000Z',
          meta_title: null,
          updated_at: '2023-07-24T13:05:18.000Z',
          cover_image: null,
          accessibility: '{"nightShift":true}',
          profile_image:
            'https://www.gravatar.com/avatar/123123123?s=250&r=x&d=mp',
          meta_description: null,
          comment_notifications: true,
          mention_notifications: true,
          milestone_notifications: true,
          free_member_signup_notification: true,
          paid_subscription_started_notification: true,
          paid_subscription_canceled_notification: false,
        },
        custom_template: null,
        meta_description: null,
        feature_image_alt: null,
        codeinjection_foot: null,
        codeinjection_head: null,
        twitter_description: null,
        feature_image_caption: null,
      },
      previous: {
        status: 'draft',
        updated_at: '2023-07-24T13:59:39.000Z',
        published_at: null,
      },
    },
  },
});
