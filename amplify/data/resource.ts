import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Data layer (AWS AppSync + DynamoDB via Amplify Gen 2).
 *
 * - ContactMessage: anyone (public API key) can submit the contact form;
 *   only signed-in admins can read/list submissions.
 * - NewsletterSubscriber: public can subscribe; admins manage.
 *
 * This gives the site a backend the front end can grow into (forms, gated
 * content, subscriber lists) alongside the Contentful-powered blog.
 */
const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      message: a.string().required(),
      source: a.string(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['create']),
      allow.authenticated().to(['read', 'list', 'delete']),
    ]),

  NewsletterSubscriber: a
    .model({
      email: a.email().required(),
      subscribedAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['create']),
      allow.authenticated().to(['read', 'list', 'delete']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 365 },
  },
});
