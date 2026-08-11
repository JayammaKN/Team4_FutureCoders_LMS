import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import { createLogger } from '../../../utils/logger.js';
const logger = createLogger('Logout');

const { Given, When, Then } = createBdd(test);

Given('Admin is in home page', async ({ page, loginFixture }) => {
  await loginFixture.openValidUrl();
  await expect(page).toHaveURL(/login/);
  await loginFixture.login();
  await expect(page.locator('#logout')).toBeVisible();
});

When('Admin clicks on the logout in the menu bar', async ({ logoutFixture }) => {
  await logoutFixture.clickLogout();
});

Then('Admin should be redirected to login page', async ({ page, logoutFixture }) => {
  await expect(page).toHaveURL(/login/);
  await expect(logoutFixture.loginButton).toBeVisible();
  logger.logoutSuccess();
});
