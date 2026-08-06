import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginData = require('../../test-data/loginData.json');

const { Given, When, Then } = createBdd(test);

// Background
Given('Admin is on login Page', async ({ page, loginFixture }) => {
  await loginFixture.openValidUrl();
  await expect(page).toHaveURL(/login/);
});

// 1 / 8 / 9 - successful login
When('Admin clicks login in button after entering a valid credential', async ({ loginFixture }) => {
  await loginFixture.login();
});

Then('Admin should land on home page', async ({ page }) => {
  await expect(page.locator('text=Logout')).toBeVisible();
});

// 2 - special character in username
When('Admin clicks login in button after entering special character in username', async ({ loginFixture }) => {
  await loginFixture.login({ username: loginData.specialCharUsername });
});

// 3 - empty username
When('Admin has entered only the password and selected a role', async ({ loginFixture }) => {
  await loginFixture.login({ username: null });
});

// 4 - empty password
When('Admin has entered only the username and selected a role', async ({ loginFixture }) => {
  await loginFixture.login({ password: null });
});

// 5 - wrong password
When('Admin clicks login in button after entering valid username , role and wrong password', async ({ loginFixture }) => {
  await loginFixture.login({ password: loginData.wrongPassword });
});

// 6 - no role selected
When('Admin has entered a valid username and password without selecting a role', async ({ loginFixture }) => {
  await loginFixture.login({ role: null });
});

// 7 - invalid role (role the user is not authorized for)
Given('Admin clicks login in button after selecting a invalid role and entering valid username ,password', async ({ loginFixture }) => {
  await loginFixture.login({ role: 'Student' });
});

// error assertions
Then('Admin should see Error message {string}', async ({ loginFixture }, message) => {
  await expect(loginFixture.getError(message)).toBeVisible();
});

Then('Admin should see Error Messge {string}', async ({ loginFixture }, message) => {
  await expect(loginFixture.getError(message)).toBeVisible();
});

// 8 - keyboard login
When('Admin clicks login in button after entering a valid credential through keyboard', async ({ loginFixture }) => {
  await loginFixture.loginWithKeyboard();
});

// 9 - mouse login
When('Admin clicks login in button after entering a valid credential through mouse', async ({ loginFixture }) => {
  await loginFixture.login();
});
