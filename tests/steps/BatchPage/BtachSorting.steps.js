import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin clicks on Arrow next to batch name', async ({batchPage}) => {
    await batchPage.clickSort("batchName")
});

Then('Admin should See the batch details sorted by batch Name in Ascending order', async ({batchPage}) => {
    const batchNameValues = await batchPage.getColumnValues("batchName");
    console.log("COUNT:", await batchPage.batchNameColumn.count());
    console.log("VALUES:", await batchPage.batchNameColumn.allTextContents());
    expect(batchPage.isAscendingOrder(batchNameValues)).toBe(true);
});

Given('Admin is in Batch page where Batch names are sorted in ascending order', async ({batchPage}) => {
    await batchPage.clickSort("batchName");
});

Then('Admin should See the batch Name is sorted in Descending order', async ({batchPage}) => {
    const batchNameValues = await batchPage.getColumnValues("batchName");
    console.log("COUNT:", await batchPage.batchNameColumn.count());
    console.log("VALUES:", await batchPage.batchNameColumn.allTextContents());
    expect(batchPage.isDescendingOrder(batchNameValues)).toBe(true);
});

When('Admin clicks on Arrow next to batch description', async ({batchPage}) => {
    await batchPage.clickSort("batchDescription");
});

Then('Admin should See the batch Description is sorted in Ascending order', async ({batchPage}) => {
    const batchDescriptionValues = await batchPage.getColumnValues("batchDescription");
    console.log("COUNT:", await batchPage.batchDescriptiomColumn.count());
    console.log("VALUES:", await batchPage.batchDescriptiomColumn.allTextContents());
    expect(batchPage.isAscendingOrder(batchDescriptionValues)).toBe(true);
});

Given('Admin is in batch page where batch description are sorted in ascending order', async ({batchPage}) => {
    await batchPage.clickSort("batchDescription");
});

Then('Admin  should See the batch Description is sorted in Descending order', async ({batchPage}) => {
     const batchDescriptionValues = await batchPage.getColumnValues("batchDescription");
    console.log("COUNT:", await batchPage.batchDescriptiomColumn.count());
    console.log("VALUES:", await batchPage.batchDescriptiomColumn.allTextContents());
    expect(batchPage.isDescendingOrder(batchDescriptionValues)).toBe(true);
});

When('Admin clicks on arrow next to number of classes', async ({batchPage}) => {
    await batchPage.clickSort("noOfClasses");
});

Then('Admin should see the batch details sorted by number of classes in ascending order', async ({batchPage}) => {
    const NoOfClasseValues = await batchPage.getColumnValues("noOfClasses");
    console.log("COUNT:", await batchPage.NoOfClassesColumn.count());
    console.log("VALUES:", await batchPage.NoOfClassesColumn.allTextContents());
    expect(batchPage.isAscendingOrderNumeric(NoOfClasseValues)).toBe(true);
});

Given('Admin is in batch page where number of classes are sorted in ascending order', async ({batchPage}) => {
    await batchPage.clickSort("noOfClasses");
});

Then('Admin should see the batch details sorted by number of classes in descending order', async ({batchPage}) => {
    const NoOfClasseValues = await batchPage.getColumnValues("noOfClasses");
    console.log("COUNT:", await batchPage.NoOfClassesColumn.count());
    console.log("VALUES:", await batchPage.NoOfClassesColumn.allTextContents());
    expect(batchPage.isDescendingOrderNumeric(NoOfClasseValues)).toBe(true);
});

When('Admin clicks on Arrow next to batch status', async ({batchPage}) => {
    await batchPage.clickSort("batchStatus");
});

Then('Admin should see the batch status sorted in Ascending order', async ({batchPage}) => {
    const batchStatusValues = await batchPage.getColumnValues("batchStatus");
    console.log("COUNT:", await batchPage.batchStatusColumn.count());
    console.log("VALUES:", await batchPage.batchStatusColumn.allTextContents());
    expect(batchPage.isAscendingOrder(batchStatusValues)).toBe(true);
});

Given('Admin is on batch where batch status are sorted in ascending order', async ({batchPage}) => {
    await batchPage.clickSort("batchStatus");
});

Then('Admin should see the batch status sorted in Descending order', async ({batchPage}) => {
    const batchStatusValues = await batchPage.getColumnValues("batchStatus");
    console.log("COUNT:", await batchPage.batchStatusColumn.count());
    console.log("VALUES:", await batchPage.batchStatusColumn.allTextContents());
    expect(batchPage.isDescendingOrder(batchStatusValues)).toBe(true);
});