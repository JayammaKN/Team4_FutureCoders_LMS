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

When('Admin clicks on {string} under the {string} menu bar in the manage batch page', async ({batchPage}, arg, arg1) => {
    await batchPage.clickAddNewBatchButton();
});

Then('Admin should see the batch name field', async ({batchPage}) => {
    expect(await batchPage.verifyBatchNameInputField()).toBeTruthy();
});

Then('Admin should see the number of classes field', async ({batchPage}) => {
    expect(await batchPage.verifyNoOfClassesInputField()).toBeTruthy();
});

Then('Admin should see the description field', async ({batchPage}) => {
    expect(await batchPage.verifyDescriptionInputField()).toBeTruthy();
});

Then('Admin should see the program status field with dropdown', async ({batchPage}) => {
    expect(await batchPage.verifyProgramDropdown()).toBeTruthy();
});

Then('Admin should see the status radio button', async ({batchPage}) => {
    expect(await batchPage.verifyStatusRadioButton()).toBeTruthy();
});