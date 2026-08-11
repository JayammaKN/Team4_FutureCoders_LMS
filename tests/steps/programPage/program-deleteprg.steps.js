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

When('Admin clicks on delete icon for a program', async ({ programFixture  }) => {
  await programFixture.clickDeleteButton();
});

Then('Admin can see Successful Program Deleted message after confirmation', async ({ programFixture }) => {
  await programFixture.confirmDelete();
});

When('Admin selects more than one program by clicking on the checkbox', async ({ programFixture  }) => {
  await programFixture.clickMultiplePrograms ();
});

Then('Admin clicks Delete icon and can see Successful Program Deleted message after confirmation', async ({ programFixture  }) => {
  await programFixture.confirmMultipleDelete();
});

Then('Admin clicks Delete icon and Admin clicks on No button', async ({ programFixture  }) => {
  await programFixture.declineDelete();
});


