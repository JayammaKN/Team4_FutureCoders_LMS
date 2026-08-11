import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('Admin is on batch page with multiple program records', async ({batchPage}) => {
    await batchPage.ensureBatchRowCount(11);
});

When('Admin clicks the next page option \\(>) in the pagination control', async ({batchPage}) => {
    await batchPage.clickNextPage();
});

Then('Admin should see the Next enabled link', async ({batchPage}) => {
    expect(await batchPage.verifyNextPageEnabled()).toBe(true);
});

Given('Admin is on batch page except the last page of Program table', async ({batchPage}) => {
    await batchPage.ensureBatchRowCount(11);
    if (await batchPage.verifyNextPageDiabled()) {
        await batchPage.clickPreviousPage();
    }
});

When('Admin clicks the last page option \\(>>) in the pagination control', async ({batchPage}) => {
    await batchPage.clickLastPage();
});

Then('Admin should see the last page link with next page link disabled on the table', async ({batchPage}) => {
    expect(await batchPage.isOnLastPage()).toBe(true);
    expect(await batchPage.verifyNextPageDiabled()).toBe(true);
});

Given('Admin is on the batch table on any page except the first page', async ({batchPage}) => {
    await batchPage.ensureBatchRowCount(11);
    if (await batchPage.verifyPreviousPageDiabled()) {
        await batchPage.clickNextPage();
    }
});

When('Admin clicks the previous page option \\(<) in the pagination control', async ({batchPage}) => {
    await batchPage.clickPreviousPage();
});

Then('Admin should see the previous page on the table', async ({batchPage}) => {
    const currentPage = await batchPage.getCurrentPageNumber();
    expect(currentPage).toBeGreaterThan(0); 
    expect(currentPage).toBe(1);  
});

Given('Admin is on any page except the first page of batch table', async ({batchPage}) => {
    await batchPage.ensureBatchRowCount(11);
    if (await batchPage.verifyPreviousPageDiabled()) {
        await batchPage.clickNextPage();
    }
});

When('Admin clicks the first page option \\(<<) in the pagination control', async ({batchPage}) => {
    await batchPage.clickFirstPage();
});

Then('Admin should see the very first page on the data table', async ({batchPage}) => {
    const currentPage = await batchPage.getCurrentPageNumber();
    expect(currentPage).toBe(1); 
});

Given('Admin is on the batch page with multiple pages of batch record', async ({batchPage}) => {
    await batchPage.ensureBatchRowCount(11);
});

When('Admin clicks first page link on the data table', async ({batchPage}) => {
     while (!(await batchPage.isFirstPageDisabled())) {
        await batchPage.clickPreviousPage();
    }
});

Then('Admin should see the Previous arrow \\(<)  disabled', async ({batchPage}) => {
    expect(await batchPage.verifyPreviousPageDiabled()).toBe(true);
});

Then('Admin should see the First page arrow \\(<<) disabled', async ({batchPage}) => {
    expect(await batchPage.verifyFirstPageDiabled()).toBe(true);
});

Then('Admin should see Next arrow \\(>)  enabled', async ({batchPage}) => {
    expect(await batchPage.verifyNextPageIsEnabled()).toBe(true);
});

Then('Admin should see Last page arrow \\(>>) enabled', async ({batchPage}) => {
    expect (await batchPage.verifyLastPageIsEnabled()).toBe(true);
});