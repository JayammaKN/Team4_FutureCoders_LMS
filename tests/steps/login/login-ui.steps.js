import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import loginData from '../../test-data/loginData.json' with { type: 'json' };

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

// 4 - reusable invalid URLs (loaded from loginData.json; any invalid URL should show an error)
When('Admin enters each invalid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.openAllInvalidUrls();
});

// 5
Then('Admin should receive an application error for every invalid URL', async ({ loginFixture }) => {
  const failedUrls = await loginFixture.getInvalidUrlFailures();
  await expect(failedUrls, 'Invalid URLs that did NOT show an error').toEqual([]);
});

// 6
Then('HTTP response < {int}. Then the link is working', async ({ loginFixture }, code) => {
  const status = await loginFixture.getResponseStatus();
  await expect(status).toBeLessThan(code);
});

// 7
Then('Admin should see the application title', async ({ page, loginFixture }) => {
  await expect(page).toHaveTitle(loginFixture.getTitle());
});

// 8
Then('Admin should see Application Logo', async ({ loginFixture }) => {
  await expect(loginFixture.logo).toBeVisible();
});

// 9
Then('Admin should see company name below the app name', async ({ loginFixture }) => {
  await expect(loginFixture.companyName).toBeVisible();
});

// 10
Then('Admin should see the login message', async ({ page, loginFixture }) => {
  await expect(page.locator(`text=${loginFixture.getLoginMessage()}`)).toBeVisible();
});

// 11
Then('Admin should see two text field', async ({ loginFixture }) => {
  await expect(loginFixture.userField).toBeVisible();
  await expect(loginFixture.passwordField).toBeVisible();
});

// 12
Then('Admin should see one dropdown', async ({ loginFixture }) => {
  await expect(loginFixture.roleDropdown).toBeVisible();
});

// 13
Then('Admin should see "User" in the first text field', async ({ loginFixture }) => {
  await expect(loginFixture.userField).toHaveAttribute('data-placeholder', loginData.placeholders.username);
});

// 14
Then('Admin should see "Password" in the second text field', async ({ loginFixture }) => {
  await expect(loginFixture.passwordField).toHaveAttribute('data-placeholder', loginData.placeholders.password);
});

// 15
Then('Admin should see asterisk mark\\(*) symbol next to text for user field', async ({ loginFixture }) => {
  await expect(loginFixture.requiredMarkerFor(loginFixture.userField)).toBeVisible();
});

// 16
Then('Admin should see asterisk mark symbol next to password text', async ({ loginFixture }) => {
  await expect(loginFixture.requiredMarkerFor(loginFixture.passwordField)).toBeVisible();
});

// 17
Then('Admin should see {string} placeholder in dropdown', async ({ loginFixture }, text) => {
  await expect(loginFixture.roleDropdown).toHaveAttribute('placeholder', text);
});

// 18
Then('Admin should see {string}, {string}, {string} options in dropdown', async ({ loginFixture }, opt1, opt2, opt3) => {
  await expect(await loginFixture.getDropdownOptions()).toEqual([opt1, opt2, opt3]);
});

// 19
Then('Admin should see login form on the centre of the page', async ({ loginFixture }) => {
  await expect(await loginFixture.isLoginFormCentered()).toBe(true);
});

// 20
Then('Username , Password labels and select the role should be left-aligned above their respective input fields', async ({ loginFixture }) => {
  await expect(await loginFixture.areLabelsLeftAligned()).toBe(true);
});

// 21
Then('Admin should see login button', async ({ loginFixture }) => {
  await expect(loginFixture.loginButton).toBeVisible();
});

// 22
Then('Admin should see user text in gray color', async ({ loginFixture }) => {
  await expect(loginFixture.getPlaceholderLabel(loginFixture.userField)).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)');
});

// 23
Then('Admin should see password text in gray color', async ({ loginFixture }) => {
  await expect(loginFixture.getPlaceholderLabel(loginFixture.passwordField)).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)');
});
