import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
// import logger from '../../../utils/logger.js';

const { Given, When, Then } = createBdd(test);

When('Admin clicks login in button after entering  a valid credentials', async ({loginFixture}) => {
  await loginFixture.login();
});

When('Admin clicks "Batch" on the navigation bar', async ({ batchPage }) => {
  await batchPage.clickBatchButton();
  await batchPage.closeOverlay();
});

Then('Admin should be in the Manage Batch Page', async ({ batchPage }) => {
  const headingText = await batchPage.verifyManageBatchPageHeading();
  expect(headingText).toBe(' Manage Batch');
});

