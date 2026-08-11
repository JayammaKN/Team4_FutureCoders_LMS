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

Given('Admin successfully logged in to LMS Portal', async ({ loginFixture }) => {
    await loginFixture.openValidUrl();
    //await expect(page).toHaveURL(/login/);
    await loginFixture.login();
});

When('Admin clicks on Add New Program under the Program menu bar', async ({ programFixture  }) => {
  await programFixture.clickAddNewProgram();
});

Then('Admin should see Program Details dialog', async ({ page  }) => {
  await expect(page.locator("//div[@role='dialog'] ")).toBeVisible();
});

Then('Admin should see title as Program Details', async ({ page  }) => {
  await expect(page.getByText('Program Details')).toBeVisible();
});

Then('Admin should see red asterisk mark beside mandatory field Name and status', async ({ page  }) => {
  await expect(page.getByText('*').first()).toBeVisible();
  await expect(page.locator('lable').getByText('*')).toBeVisible();
});

Then('Admin should see the Name text box', async ({ page  }) => {
  await expect(page.getByText('Name*')).toBeVisible();
});

Then('Admin should see the Description text box', async ({ page  }) => {
  await expect(page.getByText('Description', { exact: true })).toBeVisible();
});

Then('Admin should see Active and Inactive radio buttons', async ({ page  }) => {
  await expect(page.locator('.p-radiobutton-box').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > #category > .p-radiobutton > .p-radiobutton-box')).toBeVisible(); 
});