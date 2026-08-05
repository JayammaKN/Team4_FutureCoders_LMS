# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/features/login.feature.spec.js >> Login Functionality >> Text presence on the second field
- Location: .features-gen/tests/features/login.feature.spec.js:66:7

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('#password')
Expected: "Password"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('#password')
    14 × locator resolved to <input matinput="" required="" id="password" type="password" aria-invalid="false" aria-required="true" _ngcontent-ajo-c219="" ng-reflect-required="" ng-reflect-id="password" formcontrolname="password" ng-reflect-type="password" ng-reflect-name="password" data-placeholder="Password" ng-reflect-placeholder="Password" class="mat-input-element mat-form-field-autofill-control ng-tns-c159-1 ng-untouched ng-pristine ng-invalid cdk-text-field-autofill-monitored"/>
       - unexpected value "null"

```

```yaml
- textbox "Password"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createBdd } from 'playwright-bdd';
  3  | import { test } from '../fixture/fixtures.js';
  4  | 
  5  | const { Given, When, Then } = createBdd(test);
  6  | 
  7  | // 1
  8  | Given('Admin is on the browser', async ({ page }) => {
  9  |   await page.goto('about:blank');
  10 | });
  11 | 
  12 | // 2
  13 | When('Admin enters the Valid LMS app URL', async ({ loginFixture }) => {
  14 |   await loginFixture.openValidUrl();
  15 | });
  16 | 
  17 | // 3
  18 | Then('Admin should land on the login page', async ({ page }) => {
  19 |   await expect(page).toHaveURL(/login/);
  20 | });
  21 | 
  22 | // 4
  23 | When('Admin enters the invalid LMS app URL', async ({ loginFixture }) => {
  24 |   await loginFixture.openInvalidUrl();
  25 | });
  26 | 
  27 | // 5
  28 | Then('Admin should receive application error', async ({ loginFixture }) => {
  29 |   const status = await loginFixture.getResponseStatus();
  30 |   await expect(status).toBeGreaterThanOrEqual(400);
  31 | });
  32 | 
  33 | // 6
  34 | Then('HTTP response >= {int}. Then the link is broken', async ({ loginFixture }, code) => {
  35 |   const status = await loginFixture.getResponseStatus();
  36 |   await expect(status).toBeGreaterThanOrEqual(code);
  37 | });
  38 | 
  39 | // 7
  40 | Then('Admin should see  LMS - Learning Management System', async ({ page }) => {
  41 |   await expect(page).toHaveTitle('LMS - Learning Management System');
  42 | });
  43 | 
  44 | // 8
  45 | Then('Admin should see Application Logo', async ({ page, loginFixture }) => {
  46 |   await expect(page.locator(loginFixture.logo)).toBeVisible();
  47 | });
  48 | 
  49 | // 9
  50 | Then('Admin should see company name below the app name', async ({ page, loginFixture }) => {
  51 |   await expect(page.locator(loginFixture.companyName)).toBeVisible();
  52 | });
  53 | 
  54 | // 10
  55 | Then('Admin should see {string}', async ({ page }, text) => {
  56 |   await expect(page.locator(`text=${text}`)).toBeVisible();
  57 | });
  58 | 
  59 | // 11
  60 | Then('Admin should see two text field', async ({ page, loginFixture }) => {
  61 |   await expect(page.locator(loginFixture.userField)).toBeVisible();
  62 |   await expect(page.locator(loginFixture.passwordField)).toBeVisible();
  63 | });
  64 | 
  65 | // 12
  66 | Then('Admin should see one dropdown', async ({ page, loginFixture }) => {
  67 |   await expect(page.locator(loginFixture.roleDropdown)).toBeVisible();
  68 | });
  69 | 
  70 | // 13
  71 | Then('Admin should see "User" in the first text field', async ({ page, loginFixture }) => {
  72 |   await expect(page.locator(loginFixture.userField)).toHaveAttribute('placeholder', 'User');
  73 | });
  74 | 
  75 | // 14
  76 | Then('Admin should  see {string} in the second text field', async ({ page, loginFixture }, text) => {
> 77 |     await expect(page.locator(loginFixture.passwordField)).toHaveAttribute('placeholder', text);
     |                                                            ^ Error: expect(locator).toHaveAttribute(expected) failed
  78 | 
  79 | });
  80 | 
```