import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin logs in by entering a valid credential and clicks batch on the navigation bar', async ({loginFixture, batchPage}) => {
    await loginFixture.login();
    await batchPage.clickBatchButton();
});

Given('Admin is on the batch page', async ({batchPage}) => {
    console.log('Admin is on the batch page');
});

Then('Admin should see the batch name field', async ({batchPage}) => {
    expect(await batchPage.verifyBatchNameField()).toBeTruthy();
});

Then('Admin should see the number of classes field', async ({batchPage}) => {
 
});

Then('Admin should see the description field', async ({batchPage}) => {
 
});

Then('Admin should see the program status field with dropdown', async ({batchPage}) => {
  
});

Then('Admin should see the status radio button', async ({batchPage}) => {
 
});