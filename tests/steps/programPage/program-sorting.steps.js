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

When('Admin clicks on Arrow next to program Name', async ({ programFixture  }) => {
   await programFixture.clickSortArrow();
});

Then('Admin should See the Program Name is sorted in Ascending order first and then descending order', async ({ programFixture  }) => {
   await programFixture.verifyAscendingOrder();
   await programFixture.verifyDescendingOrder();
});
