import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

Then('Admin should see the {string} Heading', async ({batchPage}, expected) => {
  
  const headingText = await batchPage.verifyManageBatchPageHeading();
  expect(headingText).toBe(expected);
});

Then('Admin should see the disabled {string} under the header', async ({batchPage}, arg) => {
    
    const isDeleteIconDisabled = await batchPage.verifyDeleteIconInHeader();
    expect(isDeleteIconDisabled).toBe(true);
});

Then('Admin should see the pagination controls under the data table', async ({batchPage}) => {
    const isPaninationControlsVisible = await batchPage.verifyPagintionControls();
    expect(isPaninationControlsVisible).toBe(true);
});

Then('Admin should see the edit icon in each row', async ({batchPage}) => {
    // const isEditIconsVisible = await batchPage.verifyEditIconsInRows();
    // expect(isEditIconsVisible).toBe(true);
    
    expect(await batchPage.verifyEditIconsInRows()).toBeTruthy();

});

Then('Admin should see the delete icon in each row', async ({batchPage}) => {
    // const isDeleteIconVisisble = await batchPage.verifydeleteIconsInRows();
    // expect(isDeleteIconVisisble).toBe(true);
    
    expect(await batchPage.verifydeleteIconsInRows()).toBeTruthy();
});

Then('Admin should see the checkbox in each row', async ({batchPage}) => {
    // const isCheckboxesVisible = await batchPage.verifyCheckboxesInRows();
    // expect(isCheckboxesVisible).toBe(true);
    
    expect(await batchPage.verifyCheckboxesInRows()).toBeTruthy();
});

Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit\\/Delete', async ({batchPage}) => {
    
    const headernames = await batchPage.verifyHeaderNames();
    const expectedHeaderNames = ['Batch Name', 'Batch Description', 'Batch Status', 'No Of Classes', 'Program Name', 'Edit / Delete'];
    expect(headernames).toEqual(expectedHeaderNames);
});

Then('Admin should see the checkbox in the datatable header row', async ({batchPage}) => {
    // const isHeaderRowCheckboxVisible = await batchPage.verifyHeaderRowCheckbox();
    // expect(isHeaderRowCheckboxVisible).toBe(true);
    
    expect(await batchPage.verifyHeaderRowCheckbox()).toBeTruthy();
});

Then('Admin should see the sort icon next to all Datatable headers', async ({batchPage}) => {
    
    expect(await batchPage.verifySortIconsInHeader()).toBeTruthy();
});

When('Admin clicks on {string} under the {string} menu bar', async ({batchPage}, arg, arg1) => {
    await batchPage.clickBatchButton();
    await batchPage.clickAddNewBatchButton();
});

Then('Admin should see the Batch Details dialog box', async ({batchPage}) => {
    expect(await batchPage.verifyBatchDialogBox()).toBeTruthy();
});