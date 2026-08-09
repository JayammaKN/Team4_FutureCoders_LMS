# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-addnewprgFunc.feature.spec.js >> Add New Program Functional Verification >> Add new program with valid details
- Location: .features-gen\tests\features\program\program-addnewprgFunc.feature.spec.js:27:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[normalize-space()=\'Program Created Successfully\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[normalize-space()=\'Program Created Successfully\']')

```

```yaml
- text: LMS - Learning Management System
- button "Home"
- button "Program"
- button "Batch"
- button "Logout"
- text: Manage Program
- button [disabled]
- text: 
- textbox "Search..."
- grid:
  - rowgroup:
    - row "Program Name  Program Description  Program Status  Edit / Delete":
      - columnheader:
        - checkbox
        - checkbox
      - columnheader "Program Name "
      - columnheader "Program Description "
      - columnheader "Program Status "
      - columnheader "Edit / Delete"
  - rowgroup:
    - row "gfhfgh gdfgdfg Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "gfhfgh"
      - gridcell "gdfgdfg"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "sdfdsf easdasd Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "sdfdsf"
      - gridcell "easdasd"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "JavaSel-DependInjectn testing Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "JavaSel-DependInjectn"
      - gridcell "testing"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "dsfsdf sdada Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "dsfsdf"
      - gridcell "sdada"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Lmsh Learning Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Lmsh"
      - gridcell "Learning"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Python Coding Details Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Python"
      - gridcell "Coding Details"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Java Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Java"
      - gridcell
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Nova Nova Description Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Nova"
      - gridcell "Nova Description"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "AIDeepLearning AIDeepLearning Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "AIDeepLearning"
      - gridcell "AIDeepLearning"
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "PostmanAPI Learning Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "PostmanAPI"
      - gridcell "Learning"
      - gridcell "Active"
      - gridcell:
        - button
        - button
- text: Showing 1 to 10 of 46 entries
- button "" [disabled]
- button "" [disabled]
- button "1"
- button "2"
- button "3"
- button "4"
- button "5"
- button ""
- button ""
- text: In total there are 46 programs.
- dialog "Program Details":
  - text: Program Details
  - button ""
  - text: Name *
  - textbox "Name *": Nova
  - text: Program name is already exist. Description
  - textbox "Description": Nova Description
  - text: Status*
  - radio [checked]
  - text: Active
  - radio
  - text: Inactive
  - button "Cancel"
  - button "Save"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
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
  25 |     this.programActiveCheckbox = page.locator("//p-radiobutton[@id='category']").first();
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
  50 |     console.log('Program Name:', this.programName);
  51 |     console.log('Program Description:', this.programDescription)
  52 |     await this.programNameField.fill(this.programName);
  53 |     await this.programDescriptionField.fill(this.programDescription);
  54 |     await this.programActiveCheckbox.click();
  55 |     await this.programSaveButton.click();
  56 |   }
  57 |   async successfullBinkText() {
  58 |     //const successMessage = await expect(this.page.locator("//div[normalize-space()='Program Created Successfully']")).toBeVisible();
  59 |     const successMessage = this.page.locator("//div[normalize-space()='Program Created Successfully']");
> 60 |     await expect(successMessage).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  61 |     //logger.info(`success message displayed for Program creation: ${successMessage}`);
  62 |   }
  63 | 
  64 | }
```