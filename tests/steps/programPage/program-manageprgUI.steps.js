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

/*
Given('Admin is logged in to LMS Portal', async ({ programFixture  }) => {
await programFixture.loginApplication();
});


Given('Admin is on home page after Login', async ({ page }) => {
  await expect(page).toHaveTitle('LMS');
});

When('Admin clicks "Program" on the navigation bar', async ({ programFixture  }) => {
  await programFixture.clickProgram();
});
*/
Then('Admin should see heading as "Manage Program"', async ({ page }) => {
await expect(page.getByText('Manage Program')).toBeVisible();
});

Then('Admin should see a Delete button in left top is disabled', async ({ page }) => {
await expect(page.locator("//button[@icon='pi pi-trash']").first()).toBeDisabled();
});

Then('Admin should see Search bar', async ({ page }) => {
await expect(page.locator("//input[@id='filterGlobal']")).toBeVisible();
});

Then('Admin should see search... placeholder text', async ({ page }) => {
await expect(page.getByPlaceholder('Search...')).toBeVisible();
});

Then('Admin should see data table', async ({ page }) => {
await expect(page.getByText('Manage Program')).toBeVisible();
await expect(page.getByRole('columnheader', { name: 'Program Name ' })).toBeVisible();
await expect(page.getByRole('columnheader', { name: 'Program Description ' })).toBeVisible();
await expect(page.getByRole('columnheader', { name: 'Program Status ' })).toBeVisible();
await expect(page.getByRole('columnheader', { name: 'Edit / Delete' })).toBeVisible();
});

Then('Admin should see checkbox default state as unchecked', async ({ page }) => {
//await expect(page.locator("//thead[@class='p-datatable-thead']//div[@role='checkbox']")).toHaveAttribute('aria-hidden', 'false');
await expect(page.locator("//thead[@class='p-datatable-thead']//div[@role='checkbox']")).not.toBeChecked();
});

Then('Admin should see check box default state as unchecked on the left side', async ({ page }) => {

//await expect(page.locator("//div[@role='checkbox']")).toHaveAttribute('aria-checked', 'false');

 //const checkboxes = page.locator("//div[@role='checkbox']");
 const checkboxes = page.locator("//div[@role='checkbox' and @aria-checked='false']");
 const count = await checkboxes.count();
 for (let i = 0; i < count; i++) 
  {
    await expect(checkboxes.nth(i)).toHaveAttribute('aria-checked', 'false');
  }
});

Then('Admin should see the sort arrow icon', async ({ page }) => {
//await expect(page.locator("//p-sorticon")).toBeVisible();

const sortIcons = page.locator("//p-sorticon");
const count = await sortIcons.count();
for (let i = 0; i < count; i++) {
  await expect(sortIcons.nth(i)).toBeVisible();
}
});

Then('Admin should see the Edit and Delete buttons on each row of the data table', async ({ page }) => {
const editButtons = page.locator("//button[@id='editProgram']");
const deleteButtons = page.locator("//button[@id='deleteProgram']");
const editCount = await editButtons.count();
const deleteCount = await deleteButtons.count();
for (let i=0;i<editCount;i++) {
  await expect(editButtons.nth(i)).toBeVisible();
}
for (let i=0;i<deleteCount;i++) {
  await expect(deleteButtons.nth(i)).toBeVisible();
}
});

Then('Admin should see the text as "Showing x to y of z entries"', async ({ page }) => {
  
  const pagination = page.locator("[class*='p-paginator-current']");
  await expect(pagination).toBeVisible();
  const text = await pagination.innerText();
  console.log("Pagination text:", text);
  await expect(pagination).toHaveText(/Showing \d+ to \d+ of \d+ entries/);

  //await expect(page.locator("[class*='p-paginator-current']")).toHaveText(/Showing \d+ to \d+ of \d+ entries/);
});

Then('Admin should see the footer', async ({ page }) => {
await expect(page.locator("[class*='p-datatable-footer']")).toHaveText(/In total there are \d+ programs/);

});