import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin navigates to the manage batch page after login', async ({loginFixture, batchPage}) => {
    await loginFixture.login();
    await batchPage.clickBatchButton();
    await batchPage.closeOverlay();
});

Given('Admin is on the Batch page', async ({batchPage}) => {
    console.log("Admin is on the batch page")
});

When('Admin clicks the edit icon', async ({batchPage}) => {
    await batchPage.clickEditIcon();
});

Then('Admin should see the Batch details dialog box', async ({batchPage}) => {
    expect(await batchPage.verifyBatchDialogBox()).toBeTruthy();
});

Then('Admin should see batch name value field is disabled for editing', async ({batchPage}) => {
    expect(await batchPage.verifyBatchNameFieldDisabled()).toBeTruthy();
});

When('Admin Updates any fields with invalid data and click save button', async ({batchPage}) => {
    await batchPage.clickEditIcon();
    await batchPage.editWithInvalidData();
    await batchPage.clickSaveButton();
});

Then('Admin should get a error message under the respective field', async ({batchPage}) => {
    expect(await batchPage.verifyNoOfClassesWithInvalidData()).toBeTruthy();
    //  cannot validate this as no error message is displayed under respective field
});

When('Admin clicks save button after updating with valid data', async ({batchPage}) => {
    await batchPage.clickEditIcon();
    await batchPage.editWithValidData();
    await batchPage.clickSaveButton();
});

Then('Admin should get a successful message for editing the batch', async ({batchPage}) => {
    const successMessage = await batchPage.getBatchSuccessMessage();
    expect(successMessage).toBe('Successful');
});

When('Admin clicks cancel button after updating with valid data', async ({batchPage}) => {
     await batchPage.clickEditIcon();
    await batchPage.editWithValidData();
    await batchPage.clickCancelButton();
});

Then('Admin should see the batch details popup closes without editing the batch', async ({batchPage}) => {
    const dialogBoxClosed = await batchPage.verifyIsBatchDialogBoxClosed();
    expect(dialogBoxClosed).toBe(true);
});