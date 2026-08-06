import { test as base } from 'playwright-bdd';
import loginPage from '../pages/loginPage.js';
import { ENV } from '../../config/env.js';

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

});

export const expect = base.expect;
