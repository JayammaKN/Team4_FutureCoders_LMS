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

When('Admin searches and selects the newly created Program Name and edits the Program', async ({ programFixture  }) => {
   await programFixture.searchProgram();
   await programFixture.editProgram();
});

Then('Admin should see the Records of the newly created Program details', async ({ programFixture  }) => {
    await programFixture.editProgramDetails();
});

When('Admin searches with newly updated Program Name', async ({ programFixture  }) => {
   await programFixture.searchNewProgram();
});

Then('Admin verifies that the details are correctly updated', async ({ programFixture  }) => {
    await programFixture.verifyUpdatedProgramDetails();
});