import { test as base } from 'playwright-bdd';
import loginPage from '../pages/loginPage.js';
import { HomePage } from '../pages/homePage.js';
import logoutPage from '../pages/logoutPage.js';
import { ENV } from '../../config/env.js';

export const test = base.extend({

  envFixture: async ({}, use) => {
    await use({
      validUrl: ENV.BASE_URL,
      username: ENV.USERNAME,
      password: ENV.PASSWORD,
      role: ENV.ROLE,
    });
  },

  loginFixture: async ({ page, envFixture }, use) => {
    await use(new loginPage(page, envFixture, test));
  },
  homeFixture: async ({ page, envFixture }, use) => {
    await use(new HomePage(page, envFixture, test));
  },
  logoutFixture: async ({ page }, use) => {
    await use(new logoutPage(page));
  },

});

export const expect = base.expect;
