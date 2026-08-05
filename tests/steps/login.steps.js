import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

// 1
Given('Admin is on the browser', async ({ page }) => {
  await page.goto('about:blank');
});

// 2
When('Admin enters the Valid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.openValidUrl();
});

// 3
Then('Admin should land on the login page', async ({ page }) => {
  await expect(page).toHaveURL(/login/);
});

// 4
When('Admin enters the invalid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.openInvalidUrl();
});

// 5
Then('Admin should receive application error', async ({ loginFixture }) => {
  const status = await loginFixture.getResponseStatus();
  await expect(status).toBeGreaterThanOrEqual(400);
});

// 6
Then('HTTP response >= {int}. Then the link is broken', async ({ loginFixture }, code) => {
  const status = await loginFixture.getResponseStatus();
  await expect(status).toBeGreaterThanOrEqual(code);
});

// 7
Then('Admin should see  LMS - Learning Management System', async ({ page }) => {
  await expect(page).toHaveTitle('LMS - Learning Management System');
});

// 8
Then('Admin should see Application Logo', async ({ page, loginFixture }) => {
  await expect(page.locator(loginFixture.logo)).toBeVisible();
});

// 9
Then('Admin should see company name below the app name', async ({ page, loginFixture }) => {
  await expect(page.locator(loginFixture.companyName)).toBeVisible();
});

// 10
Then('Admin should see {string}', async ({ page }, text) => {
  await expect(page.locator(`text=${text}`)).toBeVisible();
});

// 11
Then('Admin should see two text field', async ({ page, loginFixture }) => {
  await expect(page.locator(loginFixture.userField)).toBeVisible();
  await expect(page.locator(loginFixture.passwordField)).toBeVisible();
});

// 12
Then('Admin should see one dropdown', async ({ page, loginFixture }) => {
  await expect(page.locator(loginFixture.roleDropdown)).toBeVisible();
});

// 13
Then('Admin should see "User" in the first text field', async ({ page, loginFixture }) => {
  await expect(page.locator(loginFixture.userField)).toHaveAttribute('placeholder', 'User');
});

// 14
Then('Admin should  see {string} in the second text field', async ({ page, loginFixture }, text) => {
    await expect(page.locator(loginFixture.passwordField)).toHaveAttribute('placeholder', text);

});
