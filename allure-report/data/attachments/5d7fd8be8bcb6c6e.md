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
    - row "asdasd adad Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "asdasd"
      - gridcell "adad"
      - gridcell "Active"
      - gridcell:
        - button
        - button
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
    - row "Java-e Introduction Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Java-e"
      - gridcell "Introduction"
      - gridcell "Active"
      - gridcell:
        - button
        - button
- text: Showing 1 to 10 of 51 entries
- button "" [disabled]
- button "" [disabled]
- button "1"
- button "2"
- button "3"
- button "4"
- button "5"
- button ""
- button ""
- text: In total there are 51 programs.
- dialog "Program Details":
  - text: Program Details
  - button ""
  - text: Name *
  - textbox "Name *": happylo
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
  1   | import { expect } from '@playwright/test';
  2   | import { createRequire } from 'module';
  3   | const require = createRequire(import.meta.url);
  4   | const loginData = require('../test-data/loginData.json');
  5   | const programData = require('../test-data/programData.json');
  6   | import logger from '../../utils/logger.js';
  7   | export class ProgramPage
  8   | 
  9   | {
  10  |   constructor(page, env, test) {
  11  |     this.page = page;
  12  |     this.env = env;
  13  |     this.test = test;
  14  | 
  15  |     this.programName = programData.programName;
  16  |     this.programDescription = programData.programDescription;
  17  |     this.invalidProgramName = programData.invalidProgramName;
  18  |     this.newProgramName = programData.newProgramName;
  19  |     this.newProgramDescription = programData.newProgramDescription;
  20  | 
  21  |     this.program = page.locator("//button[@id='program']");
  22  |     this.addNewProgram = page.getByRole('menuitem', { name: 'Add New Program' });
  23  |     this.saveButton = page.locator("//button[@id='saveProgram']");
  24  |     this.cancelButton = page.locator("//button[@label='Cancel']");
  25  |     this.xButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
  26  |     this.programNameField = page.getByRole('textbox', { name: 'Name *' });
  27  |     this.programDescriptionField = page.getByRole('textbox', { name: 'Description' });
  28  |     this.programActiveCheckbox = page.locator("//p-radiobutton[@id='category']").first();
  29  |     this.programSaveButton = page.getByRole('button', { name: 'Save' });
  30  |     this.successMessage = page.locator("//div[normalize-space()='Program Created Successfully']");
  31  |     this.errorMessage = page.locator("//small[normalize-space()='This field should start with an alphabet, no special char other than a hyphen and have min 4 char.']");
  32  |     this.searchInput = this.page.locator("//input[@placeholder='Search...']");
  33  |     this.editButton = this.page.locator("//button[@id='editProgram']").first();
  34  |     this.newSuccessMessage = page.locator("//div[normalize-space()='Program Updated']");
  35  | 
  36  |   }
  37  | 
  38  |   async clickProgram() {
  39  |     await this.program.click();
  40  |   }
  41  | 
  42  |   async clickAddNewProgram() {
  43  |     await this.addNewProgram.click();
  44  |   }
  45  | 
  46  |   async clickSaveButton() {
  47  |     await this.saveButton.click();
  48  |   }
  49  | 
  50  |   async clickCancelButton() {
  51  |     await this.cancelButton.click();
  52  |   }
  53  | 
  54  |   async clickXButton(){
  55  |     await this.xButton.click();
  56  |   }
  57  | 
  58  |   async enterValidDetails() {
  59  |     console.log('Program Name:', this.programName);
  60  |     console.log('Program Description:', this.programDescription)
  61  |     await this.programNameField.fill(this.programName);
  62  |     await this.programDescriptionField.fill(this.programDescription);
  63  |     await this.programActiveCheckbox.click();
  64  |     await this.programSaveButton.click();
  65  |   }
  66  | 
  67  |   async successfullBinkText() {
  68  |     
  69  |     //const successMessage = this.successMessage;
> 70  |     await expect(this.successMessage).toBeVisible();
      |                                       ^ Error: expect(locator).toBeVisible() failed
  71  |   }
  72  | 
  73  |   async enterInValidDetails() {
  74  |     console.log('Invalid Program Name:', this.invalidProgramName);
  75  |     await this.programNameField.fill(this.invalidProgramName);
  76  |   }
  77  | 
  78  |   async verifyErrorMessage() {
  79  |     const errorMessage = this.errorMessage;
  80  |     await expect(errorMessage).toBeVisible();
  81  |   }
  82  | 
  83  |   async searchProgram() {
  84  |     await this.searchInput.fill(this.programName);
  85  |   }
  86  | 
  87  |   async verifyProgramDetails(){
  88  |     await expect(this.page.getByText(this.programName, { exact: true })).toBeVisible();
  89  |     await expect(this.page.getByText(this.programDescription, { exact: true })).toBeVisible();
  90  |   }
  91  | 
  92  |   async editProgram() {
  93  |     await this.editButton.click();
  94  | 
  95  |   }
  96  | 
  97  |   async editProgramDetails() {
  98  |     await this.programNameField.fill(newProgramName);
  99  |     await this.programDescriptionField.fill(newProgramDescription);
  100 |     await this.programSaveButton.click();
  101 |     await expect(this.newSuccessMessage).toBeVisible();
  102 | 
  103 |   }
  104 | 
  105 | }
```