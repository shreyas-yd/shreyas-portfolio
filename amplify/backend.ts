import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * Amplify Gen 2 backend definition.
 * Run `npx ampx sandbox` for a personal cloud sandbox during development,
 * or connect the repo in the Amplify console for CI/CD deploys.
 */
defineBackend({
  auth,
  data,
});
