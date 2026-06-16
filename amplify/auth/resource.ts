import { defineAuth } from '@aws-amplify/backend';

/**
 * Auth resource. Email sign-in is enabled so an admin can sign in to manage
 * data (e.g. read contact submissions). Public visitors don't need an account.
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
