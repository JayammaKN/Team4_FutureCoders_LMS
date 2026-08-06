import { test as base } from 'playwright-bdd';
import dotenv from 'dotenv';
import loginPage from '../pages/loginPage.js';
import BatchPagePO from '../pages/BatchPagePO.js';

// Load .env (your custom path)
dotenv.config({ path: '/custom/path/.env' });

export const test = base.extend({

  envFixture: async ({}, use) => {
    await use({
      validUrl: process.env.LMS_Url,
      invalidUrl: process.env.INVALID_Url,
      username: process.env.LMS_User,
      password: process.env.LMS_Password,
      role: process.env.Role
    });
  },

  loginFixture: async ({ page, envFixture }, use) => {
    await use(new loginPage(page, envFixture));
  },

  batchPage: async ({ page, envFixture}, use) => {
    await use(new BatchPagePO(page, envFixture));
  }
  
});

export const expect = base.expect;
