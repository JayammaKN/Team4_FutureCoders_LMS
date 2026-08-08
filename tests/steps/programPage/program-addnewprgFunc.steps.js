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

Then('Admin is on Program page', async ({ programFixture }) => {
    await programFixture.clickProgram();
    await expect(programFixture.page.getByRole('menuitem', { name: 'Add New Program' })).toBeVisible();
});

Then('Admin is on Program details dialog box', async ({ programFixture  }) => {
   await programFixture.clickAddNewProgram();
   //await expect(programFixture.page.locator("//div[@role='dialog'] ")).toBeVisible();
   //await expect(programFixture.page.locator("//div[@role='dialog'] ")).toBeVisible();

});

When('Admin clicks save button without entering mandatory', async ({ programFixture  }) => {
   await programFixture.clickSaveButton();
});

Then('Admin gets message <field> is required', async ({ page  }) => {
    await expect(page.getByText('Program name is required.')).toBeVisible();
    await expect(page.getByText('Status is required.')).toBeVisible();
});

When('Admin clicks Cancel button', async ({ programFixture  }) => {
   await programFixture.clickCancelButton();
});

Then('Admin can see Program Details form disappears', async ({ page  }) => {
    await expect(page.locator("//div[@role='dialog'] ")).toBeHidden();
});

When('Admin clicks X button', async ({ programFixture  }) => {
   await programFixture.clickXButton();
});

When('Admin enter valid details for mandatory fields and Click on save button', async ({ programFixture  }) => {
   await programFixture.enterValidDetails();
});

Then('Admin gets message Successful Program created', async ({ page  }) => {
    
});