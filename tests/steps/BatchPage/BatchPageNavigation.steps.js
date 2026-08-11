import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';


// import logger from '../../utils/Logger.js';

const { Given, When, Then } = createBdd(test);

When('Admin clicks login in button after entering  a valid credentials', async ({loginFixture}) => {
  await loginFixture.login();
});

Given('Admin is on home page after Login', async ({batchPage}) => {
  console.log('Admin is on the home page after login');
});

When('Admin clicks {string} on the navigation bar', async ({ batchPage }, arg) => {
  await batchPage.clickBatchButton();
  await batchPage.closeOverlay();
});

Then('Admin should be in the Manage Batch Page', async ({ batchPage }) => {
  const headingText = await batchPage.verifyManageBatchPageHeading();
  expect(headingText).toBe(' Manage Batch');
});

