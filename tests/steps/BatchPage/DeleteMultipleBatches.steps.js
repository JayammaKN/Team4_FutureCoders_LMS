import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin selects more than one batch by clicking on the checkbox', async ({batchPage}) => {
    await batchPage.selectMultipleCheckBoxes(2);
});

Then('Admin should see the Multiple delete box enabled under manage batch', async ({batchPage}) => {
    expect(await batchPage.verifyHeaderdeleteIconEnabled()).toBe(true);
});

When('Admin clicks on the delete button on the left top of the batch page', async ({batchPage}) => {
    await batchPage.selectMultipleCheckBoxes(2);
    await batchPage.clickHeaderdeleteIcon();
});

Then('Admin lands on Confirmation form', async ({batchPage}) => {
    const deleteAlert = await batchPage.verifyDeleteConfirmDialogBox();
    expect(deleteAlert.isDialogBoxVisible).toBe(true);
    expect(deleteAlert.isYesDeleteButtonVisible).toBe(true);
    expect(deleteAlert.isNoDeleteButtonVisible).toBe(true);
});
