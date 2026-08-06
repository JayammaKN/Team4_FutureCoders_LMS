import { test as base } from 'playwright-bdd';
import loginPage from '../pages/loginPage.js';
import BatchPagePO from '../pages/BatchPagePO.js';

// Load .env (your custom path)
dotenv.config({ path: '/custom/path/.env' });

export const test = base.extend({

  envFixture: async ({}, use) => {
    await use({
      validUrl: ENV.BASE_URL,
      invalidUrl: ENV.INVALID_URL,
      username: ENV.USERNAME,
      password: ENV.PASSWORD,
      role: ENV.ROLE,
    });
  },

  loginFixture: async ({ page, envFixture }, use) => {
    await use(new loginPage(page, envFixture, test));
  },

  batchPage: async ({ page, envFixture}, use) => {
    await use(new BatchPagePO(page, envFixture));
  }
  
});

export const expect = base.expect;
