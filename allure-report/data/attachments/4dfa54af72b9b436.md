# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program.feature.spec.js >> Program Management >> Program page navigation
- Location: .features-gen\tests\features\program.feature.spec.js:10:7

# Error details

```
ReferenceError: programFixture is not defined
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createBdd } from 'playwright-bdd';
  3  | import { test } from '../fixture/fixtures.js';
  4  | import { ProgramPage } from '../pages/programPage.js';
  5  | 
  6  | const { Given, When, Then } = createBdd(test);
  7  | 
  8  | Given('Admin is logged in to LMS Portal', async ({ page }) => {
> 9  | await programFixture.loginApplication();
     |  ^ ReferenceError: programFixture is not defined
  10 | });
  11 | 
  12 | Given('Admin is on home page after Login', async ({ page }) => {
  13 |   await expect(page).toHaveTitle('LMS');
  14 | });
  15 | 
  16 | When('Admin clicks "Program" on the navigation bar', async ({ page }) => {
  17 |   await programFixture.clickProgram();
  18 | });
  19 | 
  20 | Then('Admin should be navigated to Program page', async ({ page }) => {
  21 | await expect(page.getByText('Manage Program')).toBeVisible();
  22 | });
  23 | 
  24 | Then('Admin should see sub menu in menu bar as "Add New Program"', async ({ page }) => {
  25 | await expect(page.getByRole('menuitem', { name: 'Add New Program' })).toBeVisible();
  26 | });
  27 | 
  28 | Then('Admin should see heading as "Manage Program"', async ({ page }) => {
  29 | await expect(page.getByText('Manage Program')).toBeVisible();
  30 | });
  31 | 
  32 | 
```