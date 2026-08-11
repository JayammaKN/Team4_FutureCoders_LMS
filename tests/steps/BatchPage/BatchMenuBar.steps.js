import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';



const { Given, When, Then } = createBdd(test);

Then('Admin should see sub menu in menu bar as {string}', async ({batchPage}, expectedText) => {
  const subMenuText = await batchPage.addNewBatchSubMenu();
  expect(subMenuText).toBe(expectedText);
});