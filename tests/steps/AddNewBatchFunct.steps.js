import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin navigates to the add new batch dialog box by clicking Add New Batch submenu under Batch menu bar after login', async ({loginFixture, batchPage}) => {
    await loginFixture.login();
    await batchPage.clickBatchButton();
    await batchPage.clickAddNewBatchButton();
});

Then('Admin should be in the add new batch dialog box', async ({batchPage}) => {
    expect(await batchPage.verifyBatchDialogBox()).toBeTruthy();
});

Given('Admin is on Batch Details dialog box', async ({batchPage}) => {
    console.log('Admin is on Batch Details dialog box');
});

When('Admin selects program name present in the dropdown', async ({batchPage}) => {
    await batchPage.verifyProgramDropdownButton();
    await batchPage.selectProgramNameFromDropdown();
});

Then('Admin should see selected program name in the batch name prefix box', async ({batchPage}) => {
    // expect (await batchPage.verifySelectedProgramNameInBatchPrefix()).toBeTruthy();
    const actualProgramName = await batchPage.verifySelectedProgramNameInBatchPrefix();
    const expectedProgramName = await batchPage.selectProgramNameFromDropdown();
    expect (actualProgramName).toBe(expectedProgramName);
});

Given('Admin is on Batch details dialog box', async ({batchPage}) => {
    console.log('Admin is on Batch details dialog box');
});

When('Admin enters alphabets in batch name suffix box', async ({batchPage}) => {
    // await batchPage.verifyProgramDropdownButton();
    // await batchPage.selectProgramNameFromDropdown();
    await batchPage.enterAlphabetsInBatchNameSuffix();
});

Then('Admin should get error message below the text box of respective field', async ({batchPage}) => {
    const errorMessage = await batchPage.getBatchSuffixErrorMessage();
    expect(errorMessage).toBe('This field accept only numbers and max 5 count. ');
});

When('Admin enters alphabets in batch name prefix box', async ({batchPage}) => {
    await batchPage.enterAlphabetsInBatchNamePrefix();
});

Then('Admin should see empty text box', async ({batchPage}) => {
  expect(await batchPage.verifyEmptyBatchPrefix()).toBeTruthy();
});

When('Admin enters the data only to the mandatory fields and clicks save button', async ({batchPage}) => {
    await batchPage.enterMandatoryFields();
    await batchPage.clickSaveButton();
});

Then('Admin should get a successful message', async ({batchPage}) => {
    const successMessage = await batchPage.getBatchSuccessMessage();
    expect(successMessage).toBe('Successful');
});

When('Admin leaves blank one of the mandatory fields', async ({batchPage}) => {
    await batchPage.verifyWithEmptyMandatoryField();
    await batchPage.clickSaveButton();
});

Then('Admin should get a error message on the respective mandatory field', async ({batchPage}) => {
    const errorMessage = await batchPage.verifyEmptyNoOfClassesErrorMessage();
    expect(errorMessage).toBe('Number of classes is required.');
});

When('Admin enters the valid data to all the mandatory fields and click cancel button', async ({batchPage}) => {
    await batchPage.enterMandatoryFields();
    await batchPage.clickCancelButton();
});

Then('Admin should see the batch details popup closes without creating any batch', async ({batchPage}) => {
    const dialogBoxClosed = await batchPage.verifyIsBatchDialogBoxClosed();
    expect(dialogBoxClosed).toBe(true);
});

When('Admin clicks on the close icon', async ({batchPage}) => {
    await batchPage.clickCloseButton();
});

Then('batch details pop up closes', async ({batchPage}) => {
    const dialogBoxClosed = await batchPage.verifyIsBatchDialogBoxClosed();
    expect(dialogBoxClosed).toBe(true);
});

When('Admin enters the data to all fields and clicks save button', async ({batchPage}) => {
    await batchPage.enterAllFields();
    await batchPage.clickSaveButton();
});