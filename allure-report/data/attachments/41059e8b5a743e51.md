# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program.feature.spec.js >> Program Management >> Program page Menu bar
- Location: .features-gen\tests\features\program.feature.spec.js:16:7

# Error details

```
ReferenceError: Cannot access 'programPage' before initialization
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createBdd } from 'playwright-bdd';
  3  | import { test } from '../fixture/fixtures.js';
  4  | import { programPage } from '../pages/programpage.js';
  5  | 
  6  | const { Given, When, Then } = createBdd(test);
  7  | 
  8  | Given('Admin is logged in to LMS Portal', async ({ page }) => {
> 9  | const programPage = new programPage(page);
     |                     ^ ReferenceError: Cannot access 'programPage' before initialization
  10 | await programPage.loginApplication();
  11 | });
  12 | 
  13 | Given('Admin is on home page after Login', async ({ page }) => {
  14 |   await expect(page).toHaveTitle('LMS');
  15 | });
  16 | 
  17 | When('Admin clicks "Program" on the navigation bar', async ({ page }) => {
  18 |   const programPage = new programPage(page);
  19 |   await programPage.clickProgram();
  20 | });
  21 | 
  22 | Then('Admin should be navigated to Program page', async ({ page }) => {
  23 | await expect(page.getByText('Manage Program')).toBeVisible();
  24 | });
  25 | 
  26 | Then('Admin should see sub menu in menu bar as "Add New Program"', async ({ page }) => {
  27 | await expect(page.getByRole('menuitem', { name: 'Add New Program' })).toBeVisible();
  28 | });
```