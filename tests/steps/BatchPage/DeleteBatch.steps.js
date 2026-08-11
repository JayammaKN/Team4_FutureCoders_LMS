import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';


const { Given, When, Then } = createBdd(test);

When('Admin clicks the delete Icon on any row', async ({batchPage}) => {
    await batchPage.clickDeleteIcon();
});

Then('Admin should see the confirm alert box with yes and no button', async ({batchPage}) => {
    const deleteAlert = await batchPage.verifyDeleteConfirmDialogBox();
    expect(deleteAlert.isDialogBoxVisible).toBe(true);
    expect(deleteAlert.isYesDeleteButtonVisible).toBe(true);
    expect(deleteAlert.isNoDeleteButtonVisible).toBe(true);
});

Given('Admin is on the batch confirm popup page', async ({batchPage}) => {
    console.log("Admin is on the batch delete popup")
});

When('Admin clicks yes button after clicking delete icon', async ({batchPage}) => {
    await batchPage.clickYesDeleteButton();
});

Then('Admin should see the successful message and the batch should be deleted', async ({batchPage}) => {
    const ConfirmDelete = await batchPage.verifyIsBatchDeleted();
    expect(ConfirmDelete.afterDeleteBatchCount).toBe(ConfirmDelete.beforeDeleteCount-1);
    const successMessage = await batchPage.getBatchSuccessMessage();
    expect(successMessage).toBe('Successful');

});

When('Admin clicks  no button after clicking delete icon', async ({batchPage}) => {
    
    await batchPage.clickNoDeleteButton();
    
});

Then('Admin should see the alert box closed and the batch is not deleted', async ({batchPage}) => {
    // const ConfirmDelete = await batchPage.verifyBatchNotDeleted();
    // expect(ConfirmDelete.afterDeleteBatchCount).toBe(ConfirmDelete.beforeDeleteCount);
    expect(await batchPage.verifyIsDeleteDialogboxClosed()).toBe(true);
});

When('Admin clicks on the close icon in delete dialog box', async ({batchPage}) => {
    await batchPage.clickDeleteIcon();
    await batchPage.clickDeleteDialogBoxCloseIcon();
});

Then('Admin should see the alert box closed', async ({batchPage}) => {
    expect(await batchPage.verifyIsDeleteDialogboxClosed()).toBe(true);
});