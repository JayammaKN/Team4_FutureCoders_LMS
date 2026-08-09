# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-addnewprgUI.feature.spec.js >> Add New Program UI Verification >> Add New Program dialog is displayed
- Location: .features-gen\tests\features\program\program-addnewprgUI.feature.spec.js:12:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[@id=\'pr_id_127-label\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//span[@id=\'pr_id_127-label\']')

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
    - row "AIML Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "AIML"
      - gridcell
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "ProgramForBatch Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "ProgramForBatch"
      - gridcell
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Javaa Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Javaa"
      - gridcell
      - gridcell "Active"
      - gridcell:
        - button
        - button
    - row "Javaaa Active":
      - gridcell:
        - checkbox
        - checkbox
      - gridcell "Javaaa"
      - gridcell
      - gridcell "Active"
      - gridcell:
        - button
        - button
- text: Showing 1 to 10 of 35 entries
- button "" [disabled]
- button "" [disabled]
- button "1"
- button "2"
- button "3"
- button "4"
- button ""
- button ""
- text: In total there are 35 programs.
- dialog "Program Details":
  - text: Program Details
  - button ""
  - text: Name *
  - textbox "Name *"
  - text: Description
  - textbox "Description"
  - text: Status*
  - radio
  - text: Active
  - radio
  - text: Inactive
  - button "Cancel"
  - button "Save"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { createBdd } from 'playwright-bdd';
  3  | import { test } from '../../fixture/fixtures.js';
  4  | import loginPage from '../../pages/loginPage.js';
  5  | import { ProgramPage } from '../../pages/programPage.js';
  6  | import { createRequire } from 'module';
  7  | 
  8  | const require = createRequire(import.meta.url);
  9  | const programData = require('../../test-data/programData.json');
  10 | const loginData = require('../../test-data/loginData.json');
  11 | const { Given, When, Then } = createBdd(test);
  12 | 
  13 | Given('Admin is on Program page', async ({ programFixture }) => {
  14 |     await programFixture.clickProgram();
  15 | });
  16 | 
  17 | When('Admin clicks on Add New Program under the Program menu bar', async ({ programFixture  }) => {
  18 |   await programFixture.clickAddNewProgram();
  19 | });
  20 | 
  21 | Then('Admin should see Program Details dialog', async ({ page  }) => {
> 22 |   await expect(page.locator("//span[@id='pr_id_127-label']")).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  23 | });
```