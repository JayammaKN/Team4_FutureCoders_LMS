import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import logger from '../../../utils/logger.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const logoutData = require('../../test-data/logoutData.json');

const { Given, When, Then } = createBdd(test);

// Background: Admin is logged into the application
Given('Admin is in home page', async ({ page, loginFixture }) => {
  await loginFixture.openValidUrl();
  await expect(page).toHaveURL(/login/);
  await loginFixture.login();
  await expect(page.locator('#logout')).toBeVisible();
});

// When: Admin clicks on the logout in the menu bar
When('Admin clicks on the logout in the menu bar', async ({ logoutFixture }) => {
  await logoutFixture.clickLogout();
});

// Then: Admin should be redirected to login page
Then('Admin should be redirected to login page', async ({ page, logoutFixture }) => {
  await expect(page).toHaveURL(new RegExp(logoutData.loginPageUrl));
  await expect(logoutFixture.loginButton).toBeVisible();
  logger.logoutSuccess();
});
