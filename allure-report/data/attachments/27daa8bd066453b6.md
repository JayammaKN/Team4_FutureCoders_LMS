# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program.feature.spec.js >> Program Management >> Program page navigation
- Location: .features-gen\tests\features\program.feature.spec.js:10:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Admin', { exact: true }) resolved to 2 elements:
    1) <span class="mat-select-min-line ng-tns-c162-3 ng-star-inserted">Admin</span> aka getByLabel('Admin').getByText('Admin')
    2) <span class="mat-option-text"> Admin </span> aka locator('#mat-option-0').getByText('Admin')

Call log:
  - waiting for getByText('Admin', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e9]:
    - paragraph [ref=e10]: Please login to LMS application
    - generic [ref=e14]:
      - textbox "User" [ref=e15]: Lmshackathon@gmail.com
      - generic: User *
    - generic [ref=e19]:
      - textbox "Password" [ref=e20]: lmsAug@2026
      - generic: Password *
    - generic [ref=e24] [cursor=pointer]:
      - combobox "Select the role Admin" [active] [ref=e25]:
        - generic [ref=e26]: Admin
      - generic: Select the role *
    - button "Login" [ref=e31] [cursor=pointer]
    - link "Forgot Password" [ref=e32] [cursor=pointer]:
      - /url: /forgot-password
  - generic:
    - generic:
      - generic:
        - generic:
          - listbox "Select the role":
            - option "Admin" [selected]
            - option "Staff"
            - option "Student"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createBdd } from 'playwright-bdd';
  3  | import { test } from '../fixture/fixtures.js';
  4  | 
  5  | const { Given, When, Then } = createBdd(test);
  6  | 
  7  | Given('Admin is logged in to LMS Portal', async ({ page }) => {
  8  |   await page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/login');
  9  |   await page.locator("//input[@id='username']").fill('Lmshackathon@gmail.com');
  10 |   await page.locator("//input[@id='password']").fill('lmsAug@2026');
  11 |   //await page.locator("//div[@id='mat-select-value-3']").click();
  12 |   await page.getByLabel('Select the role').getByText('Select the role').click();
  13 |   await page.getByRole('option', { name: 'Admin' }).click();
> 14 |   await page.getByText('Admin', { exact: true }).click();
     |                                                  ^ Error: locator.click: Error: strict mode violation: getByText('Admin', { exact: true }) resolved to 2 elements:
  15 |   await page.locator("//button[@id='login']").click();
  16 | });
  17 | 
  18 | Given('Admin is on home page after Login', async ({ page }) => {
  19 |   await expect(page).toHaveURL(/Home/);
  20 | });
  21 | 
  22 | When('Admin clicks "Program" on the navigation bar', async ({ page }) => {
  23 |   await page.locator("//span[@class='mat-button-wrapper' and normalize-space()='Program']").click();
  24 | });
  25 | 
  26 | Then('Admin should be navigated to Program page', async ({ page }) => {
  27 |   await expect(page).toHaveURL(/Manage Program/);
  28 | });
```