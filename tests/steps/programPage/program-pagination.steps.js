import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import loginPage from '../../pages/loginPage.js';
import { ProgramPage } from '../../pages/programPage.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const programData = require('../../test-data/programData.json');
const loginData = require('../../test-data/loginData.json');
const { Given, When, Then } = createBdd(test);

When('Admin clicks the next page option > in the pagination control', async ({ programFixture  }) => {
   await programFixture.clickNextPage();
});

Then('Admin should navigate to the next page', async ({ programFixture  }) => {
   await programFixture.verifyNextPage();
});

When('Admin clicks the next page option >> in the pagination control', async ({ programFixture  }) => {
   await programFixture.clickLastPage();
});

Then('Admin should navigate to the last page', async ({ programFixture  }) => {
   await programFixture.verifyLastPage();
});

When('Admin clicks the previous page option < in the pagination control', async ({ programFixture  }) => {
   await programFixture.clickPreviousPage();
});

Then('Admin should see the previous page record on the table', async ({ programFixture  }) => {
   await programFixture.verifyPreviousPage();
});

When('Admin clicks the previous page option << in the pagination control', async ({ programFixture  }) => {
   await programFixture.clickFirstPage();
});

Then('Admin should see the very first page record on the table', async ({ programFixture  }) => {
   await programFixture.verifyFirstPage();
});