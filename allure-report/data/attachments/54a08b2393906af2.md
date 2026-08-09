# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-addnewprgFunc.feature.spec.js >> Add New Program Functional Verification >> Add new program with valid details
- Location: .features-gen\tests\features\program\program-addnewprgFunc.feature.spec.js:27:3

# Error details

```
TypeError: Cannot read properties of undefined (reading 'getByRole')
```

# Test source

```ts
  1  | //import { expect } from '@playwright/test';
  2  | import { createRequire } from 'module';
  3  | const require = createRequire(import.meta.url);
  4  | const loginData = require('../test-data/loginData.json');
  5  | const programData = require('../test-data/programData.json');
  6  | import logger from '../../utils/logger.js';
  7  | export class ProgramPage
  8  | 
  9  | {
  10 |   constructor(page, env, test) {
  11 |     this.page = page;
  12 |     this.env = env;
  13 |     this.test = test;
  14 | 
  15 |     this.programName = programData.programName;
  16 |     this.programDescription = programData.programDescription;
  17 | 
  18 |     this.program = page.locator("//button[@id='program']");
  19 |     this.addNewProgram = page.getByRole('menuitem', { name: 'Add New Program' });
  20 |     this.saveButton = page.locator("//button[@id='saveProgram']");
  21 |     this.cancelButton = page.locator("//button[@label='Cancel']");
  22 |     this.xButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
  23 |     this.programNameField = page.getByRole('textbox', { name: 'Name *' });
  24 |     this.programDescriptionField = page.getByRole('textbox', { name: 'Description' });
> 25 |     this.programActiveCheckbox = page.page.getByRole('textbox', { name: 'Name *' });
     |                                            ^ TypeError: Cannot read properties of undefined (reading 'getByRole')
  26 |     this.programSaveButton = page.getByRole('button', { name: 'Save' });
  27 |   }
  28 | 
  29 |   async clickProgram() {
  30 |     await this.program.click();
  31 |   }
  32 | 
  33 |   async clickAddNewProgram() {
  34 |     await this.addNewProgram.click();
  35 |   }
  36 | 
  37 |   async clickSaveButton() {
  38 |     await this.saveButton.click();
  39 |   }
  40 | 
  41 |   async clickCancelButton() {
  42 |     await this.cancelButton.click();
  43 |   }
  44 | 
  45 |   async clickXButton(){
  46 |     await this.xButton.click();
  47 |   }
  48 | 
  49 |   async enterValidDetails() {
  50 |     await this.programNameField.fill(this.programName);
  51 |     await this.programDescriptionField.fill(this.programDescription);
  52 |     await this.programActiveCheckbox.check();
  53 |     await this.programSaveButton.click();
  54 |   }
  55 |   async successfullBinkText() {
  56 |     //const successMessage = await expect(this.page.locator("//div[normalize-space()='Program Created Successfully']")).toBeVisible();
  57 |     const successMessage = this.page.locator("//div[normalize-space()='Program Created Successfully']");
  58 |     await expect(successMessage).toBeVisible();
  59 |     logger.info(`success message displayed for Program creation: ${successMessage}`);
  60 |   }
  61 | 
  62 | }
```