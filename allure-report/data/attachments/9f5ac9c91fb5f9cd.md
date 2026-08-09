# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\program-editprg.feature.spec.js >> Edit Program Functional Verification >> Search new Program and verify the details
- Location: .features-gen\tests\features\program\program-editprg.feature.spec.js:16:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('happyfournew')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('happyfournew')

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
- textbox "Search...": happyfournew
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
  - rowgroup
- text: Showing 0 to 0 of 0 entries
- button "" [disabled]
- button "" [disabled]
- button "1"
- button "" [disabled]
- button "" [disabled]
- text: In total there are 55 programs.
- menu:
  - menuitem "Add New Program"
```

# Test source

```ts
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
  70  |     await expect(this.successMessage).toBeVisible();
  71  |   }
  72  | 
  73  |   async enterInValidDetails() {
  74  |     console.log('Invalid Program Name:', this.invalidProgramName);
  75  |     await this.programNameField.fill(this.invalidProgramName);
  76  |   }
  77  | 
  78  |   async verifyErrorMessage() {
  79  |     await expect(this.errorMessage).toBeVisible();
  80  |   }
  81  | 
  82  |   async searchProgram() {
  83  |     await this.searchInput.fill(this.programName);;
  84  |     //await expect(this.page.getByText(this.programName, { exact: true })).toBeVisible();
  85  |     //await expect(this.page.getByText(this.programDescription, { exact: true })).toBeVisible();
  86  |     await this.page.mouse.click(500, 300);
  87  |     await expect(this.page.getByText(this.programName)).toBeVisible();
  88  |     await expect(this.page.getByText(this.programDescription)).toBeVisible();
  89  |     //await this.page.mouse.click(500, 300);
  90  |     //await this.page.waitForTimeout(500)
  91  |   }
  92  | 
  93  |   async editProgram() {
  94  |     await this.editButton.click()
  95  | 
  96  |   }
  97  | 
  98  |   async editProgramDetails() {
  99  |     await this.programNameField.fill(this.newProgramName);
  100 |     await this.programDescriptionField.fill(this.newProgramDescription);
  101 |     await this.programSaveButton.click();
  102 |     await expect(this.newSuccessMessage).toBeVisible();
  103 | 
  104 |   }
  105 | 
  106 |   async searchNewProgram() {
  107 |     await this.searchInput.fill(this.newProgramName);;
> 108 |     await expect(this.page.getByText(this.newProgramName)).toBeVisible();
      |                                                            ^ Error: expect(locator).toBeVisible() failed
  109 |     await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
  110 |     await this.page.waitForTimeout(500)
  111 |   }
  112 | 
  113 |   async verifyUpdatedProgramDetails() {
  114 |     await expect(this.page.getByText(this.newProgramName)).toBeVisible();
  115 |     await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
  116 |   }
  117 | 
  118 | }
```