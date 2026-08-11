import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

Then('Admin should see sub menu in menu bar as "Add New Batch"', async ({batchPage}) => {
  const subMenuText = await batchPage.getAddNewBatchSubMenuText();
  expect(subMenuText).toBe('Add New Batch');
});