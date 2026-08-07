import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import loginPage from '../../pages/loginPage.js';
import { ProgramPage } from '../../pages/programPage.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const programData = require('../../test-data/programData.json');
const loginData = require('../../test-data/loginData.json');
const { Given, When, Then } = createBdd(test);

Given('Admin is logged in to LMS Portal', async ({ programFixture  }) => {
await programFixture.loginApplication();
});


Given('Admin is on home page after Login', async ({ page }) => {
  await expect(page).toHaveTitle('LMS');
});

When('Admin clicks "Program" on the navigation bar', async ({ programFixture  }) => {
  await programFixture.clickProgram();
});

Then('Admin should be navigated to Program page', async ({ page }) => {
await expect(page.getByText('Manage Program')).toBeVisible();
});