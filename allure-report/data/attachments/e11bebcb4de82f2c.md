# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-manageprgUI.feature.spec.js >> Manage Program UI Verification >> Footer message is displayed
- Location: .features-gen\tests\features\program\program-manageprgUI.feature.spec.js:51:3

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e9]:
  - paragraph [ref=e10]: Please login to LMS application
  - generic [ref=e14]:
    - textbox "User" [ref=e15]
    - generic: User *
  - generic [ref=e19]:
    - textbox "Password" [ref=e20]
    - generic: Password *
  - generic [ref=e24] [cursor=pointer]:
    - combobox "Select the role Select the role" [ref=e25]:
      - generic [ref=e26]: Select the role
    - generic: Select the role *
  - button "Login" [ref=e31] [cursor=pointer]
  - link "Forgot Password" [ref=e32] [cursor=pointer]:
    - /url: /forgot-password
```

# Test source

```ts
  1  | //import { expect } from '@playwright/test';
  2  | import { createRequire } from 'module';
  3  | const require = createRequire(import.meta.url);
  4  | const loginData = require('../test-data/loginData.json');
  5  | const programData = require('../test-data/programData.json');
  6  | import logger from '../../utils/logger.js';
  7  | import { ENV } from '../../config/env.js';
  8  | export class ProgramPage
  9  | 
  10 | {
  11 |   constructor(page, env) {
  12 |     this.page = page;
  13 |     this.env = env;
  14 |     //this.test = test;
  15 |     this.userField = '#username';
  16 |     this.passwordField = '#password';
  17 |     this.roleDropdown = 'mat-select';
  18 |     this.loginButton = '#login';
  19 |   }
  20 | /*
  21 | async loginApplication()
  22 | {
  23 |   await this.page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/login');
  24 |   await this.page.locator("//input[@id='username']").fill('Lmshackathon@gmail.com');
  25 |   await this.page.locator("//input[@id='password']").fill('lmsAug@2026');
  26 |   await this.page.getByLabel('Select the role').getByText('Select the role').click();
  27 |   await this.page.getByRole('option', { name: 'Admin' }).click();
  28 |   await this.page.locator("//button[@id='login']").click();
  29 | }*/
  30 | 
  31 |   async loginApplication() {
  32 |   
  33 |     await this.page.goto(this.env.validUrl);
> 34 |     await this.page.locator("//input[@id='username']").fill(this.env.username);
     |                                                        ^ Error: locator.fill: value: expected string, got undefined
  35 |     await this.page.locator("//input[@id='password']").fill(this.env.password);
  36 |     await this.page.getByLabel('Select the role').getByText('Select the role').click();
  37 |     await this.page.getByRole('option', { name: this.env.role }).click();
  38 |     await this.page.locator("//button[@id='login']").click();
  39 |   }
  40 | 
  41 |   async clickProgram() {
  42 |     await this.page.locator("//button[@id='program']").click();
  43 |   }
  44 | 
  45 | }
```