import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const batchData = require('../../test-data/batchData.json');
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('Admin enters {string} in the search box', async ({batchPage}, searchKey) => {
    await batchPage.enterSearchText(searchKey);
});

Then('Admin should see the filtered batch details based on the  {string} in the data table', async ({batchPage}, searchKey) => {
    const expected = (batchPage.searchSeed && batchPage.searchSeed[searchKey]) || batchData.searchBarData[searchKey];
     const column = batchPage.getColumn(searchKey);
     const text = await batchPage.getColumnText(column);
     console.log("Expected:", expected);
    console.log("Actual:", text);
     expect(text.some(v => v.includes(expected))).toBe(true);
});

When('Admin enters the non existing batch name', async ({batchPage}) => {
    await batchPage.enterNonExistingBatchName();
});

Then('Admin should see no results displayed', async ({batchPage}) => {
    expect(await batchPage.getRowCount()).toBe(0);
});