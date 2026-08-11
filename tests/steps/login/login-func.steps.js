import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import loginData from '../../test-data/loginData.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('Admin is on login Page', async ({ page, loginFixture }) => {
  await loginFixture.openValidUrl();
  await expect(page).toHaveURL(/login/);
});

When('Admin clicks login in button after entering a valid credential', async ({ loginFixture }) => {
  await loginFixture.login();
});

Then('Admin should land on home page', async ({ page }) => {
  await expect(page.locator('text=Logout')).toBeVisible();
});

When('Admin clicks login in button after entering special character in username', async ({ loginFixture }) => {
  for (const username of loginData.specialCharUsername) {
    await loginFixture.login({ username });
  }
});

When('Admin has entered only the password and selected a role', async ({ loginFixture }) => {
  await loginFixture.login({ username: null });
});

When('Admin has entered only the username and selected a role', async ({ loginFixture }) => {
  await loginFixture.login({ password: null });
});

When('Admin clicks login in button after entering valid username , role and wrong password', async ({ loginFixture }) => {
  for (const password of loginData.wrongPassword) {
    await loginFixture.login({ password });
  }
});

When('Admin has entered a valid username and password without selecting a role', async ({ loginFixture }) => {
  await loginFixture.login({ role: null });
});

Given('Admin clicks login in button after selecting a invalid role and entering valid username ,password', async ({ loginFixture }) => {
  for (const role of loginData.wrongRole) {
    await loginFixture.login({ role });
  }
});

Then('Admin should see Error message {string}', async ({ loginFixture }, message) => {
  expect(loginFixture.attempts.length).toBeGreaterThan(0);
  for (const attempt of loginFixture.attempts) {
    expect(attempt.errors).toContain(message);
  }
});

Then('Admin should see Error Messge {string}', async ({ loginFixture }, message) => {
  expect(loginFixture.attempts.length).toBeGreaterThan(0);
  for (const attempt of loginFixture.attempts) {
    expect(attempt.errors).toContain(message);
  }
});

When('Admin clicks login in button after entering a valid credential through keyboard', async ({ loginFixture }) => {
  await loginFixture.loginWithKeyboard();
});

When('Admin clicks login in button after entering a valid credential through mouse', async ({ loginFixture }) => {
  await loginFixture.login();
});
