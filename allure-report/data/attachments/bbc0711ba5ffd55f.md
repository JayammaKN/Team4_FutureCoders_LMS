# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-editprg.feature.spec.js >> Edit Program Functional Verification >> Verify added Program is created
- Location: .features-gen\tests\features\program\program-editprg.feature.spec.js:11:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('cell', { name: 'happy' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('cell', { name: 'happy' })

```

```yaml
- text: LMS - Learning Management System
- button "Home"
- button "Program" [expanded]
- button "Batch"
- button "Logout"
- text: Manage Program
- button [disabled]
- text: 
- textbox "Search...": happy
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
    - row "happy Nova Description Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "happy"
      - gridcell "Nova Description"
      - gridcell "Active"
      - gridcell:
        - button
        - button
- text: Showing 1 to 1 of 1 entries
- button "" [disabled]
- button "" [disabled]
- button "1"
- button "" [disabled]
- button "" [disabled]
- text: In total there are 49 programs.
- menu:
  - menuitem "Add New Program"
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
  17 |     this.invalidProgramName = programData.invalidProgramName;
  18 | 
  19 |     this.program = page.locator("//button[@id='program']");
  20 |     this.addNewProgram = page.getByRole('menuitem', { name: 'Add New Program' });
  21 |     this.saveButton = page.locator("//button[@id='saveProgram']");
  22 |     this.cancelButton = page.locator("//button[@label='Cancel']");
  23 |     this.xButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
  24 |     this.programNameField = page.getByRole('textbox', { name: 'Name *' });
  25 |     this.programDescriptionField = page.getByRole('textbox', { name: 'Description' });
  26 |     this.programActiveCheckbox = page.locator("//p-radiobutton[@id='category']").first();
  27 |     this.programSaveButton = page.getByRole('button', { name: 'Save' });
  28 |     this.successMessage = page.locator("//div[normalize-space()='Program Created Successfully']");
  29 |     this.errorMessage = page.locator("//small[normalize-space()='This field should start with an alphabet, no special char other than a hyphen and have min 4 char.']");
  30 |     this.searchInput = this.page.locator("//input[@placeholder='Search...']");
  31 |   }
  32 | 
  33 |   async clickProgram() {
  34 |     await this.program.click();
  35 |   }
  36 | 
  37 |   async clickAddNewProgram() {
  38 |     await this.addNewProgram.click();
  39 |   }
  40 | 
  41 |   async clickSaveButton() {
  42 |     await this.saveButton.click();
  43 |   }
  44 | 
  45 |   async clickCancelButton() {
  46 |     await this.cancelButton.click();
  47 |   }
  48 | 
  49 |   async clickXButton(){
  50 |     await this.xButton.click();
  51 |   }
  52 | 
  53 |   async enterValidDetails() {
  54 |     console.log('Program Name:', this.programName);
  55 |     console.log('Program Description:', this.programDescription)
  56 |     await this.programNameField.fill(this.programName);
  57 |     await this.programDescriptionField.fill(this.programDescription);
  58 |     await this.programActiveCheckbox.click();
  59 |     await this.programSaveButton.click();
  60 |   }
  61 | 
  62 |   async successfullBinkText() {
  63 |     
  64 |     //const successMessage = this.successMessage;
  65 |     await expect(this.successMessage).toBeVisible();
  66 |   }
  67 | 
  68 |   async enterInValidDetails() {
  69 |     console.log('Invalid Program Name:', this.invalidProgramName);
  70 |     await this.programNameField.fill(this.invalidProgramName);
  71 |     //await this.programDescriptionField.fill(this.programDescription);
  72 |     //await this.programActiveCheckbox.click();
  73 |     //await this.programSaveButton.click();
  74 |   }
  75 |   async verifyErrorMessage() {
  76 |     const errorMessage = this.errorMessage;
  77 |     await expect(errorMessage).toBeVisible();
  78 |   }
  79 | 
  80 |   async searchProgram() {
  81 |     await this.searchInput.fill(this.programName);
  82 |     await this.page.waitForTimeout(3000); 
  83 |   }
  84 | 
  85 |   async verifyProgramDetails(){
> 86 |     await expect(this.page.getByRole('cell', { name: this.programName })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  87 |     await expect(this.page.getByRole('cell', { name: this.programDescription })).toBeVisible();
  88 |     await expect(this.page.getByRole('cell', { name: 'Active' })).toBeVisible();
  89 |   }
  90 | 
  91 | }
```