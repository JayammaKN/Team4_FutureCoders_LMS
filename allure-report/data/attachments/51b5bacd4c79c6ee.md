# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program.feature.spec.js >> Program Management >> Program page navigation
- Location: .features-gen\tests\features\program.feature.spec.js:10:7

# Error details

```
TypeError: _programPage.default is not a constructor
```

# Test source

```ts
  1  | import { test as base } from 'playwright-bdd';
  2  | import dotenv from 'dotenv';
  3  | import loginPage from '../pages/loginPage.js';
  4  | import ProgramPage from '../pages/programPage.js';
  5  | 
  6  | // Load .env (your custom path)
  7  | dotenv.config({ path: '/custom/path/.env' });
  8  | 
  9  | export const test = base.extend({
  10 | 
  11 |   envFixture: async ({}, use) => {
  12 |     await use({
  13 |       validUrl: process.env.LMS_Url,
  14 |       invalidUrl: process.env.INVALID_Url,
  15 |       username: process.env.LMS_User,
  16 |       password: process.env.LMS_Password,
  17 |       role: process.env.Role
  18 |     });
  19 |   },
  20 | 
  21 |   loginFixture: async ({ page, envFixture }, use) => {
  22 |     await use(new loginPage(page, envFixture));
  23 |   },
  24 | 
  25 |   programFixture: async ({ page }, use) => {
> 26 |     await use(new ProgramPage(page));
     |               ^ TypeError: _programPage.default is not a constructor
  27 |   }
  28 | 
  29 | });
  30 | 
  31 | export const expect = base.expect;
  32 | 
```