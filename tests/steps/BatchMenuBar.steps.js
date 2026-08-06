import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

Then('Admin should see sub menu in menu bar as {string}', async ({BatchPage}, expectedText) => {
  const subMenuText = await BatchPage.addNewBatchSubMenu();
  expect(subMenuText).toBe(expectedText);
});