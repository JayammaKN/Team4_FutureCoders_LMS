# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\program\deleteprg.feature.spec.js >> Delete Program >> Delete Multiple Program
- Location: .features-gen\tests\features\program\deleteprg.feature.spec.js:16:3

# Error details

```
TypeError: expect(...).click is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: LMS - Learning Management System
      - generic [ref=e6]:
        - button "Home" [ref=e7] [cursor=pointer]
        - button "Program" [active] [ref=e8] [cursor=pointer]
        - button "Batch" [ref=e9] [cursor=pointer]
        - button "Logout" [ref=e10] [cursor=pointer]
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]: Manage Program
        - generic [ref=e16]:
          - button [disabled] [ref=e18]:
            - generic [ref=e19]: 
          - generic [ref=e21]:
            - generic [ref=e22]: 
            - textbox "Search..." [ref=e23]
      - generic [ref=e26]:
        - grid [ref=e28]:
          - rowgroup [ref=e29]:
            - row [ref=e30]:
              - columnheader [ref=e31]:
                - generic [ref=e33] [cursor=pointer]:
                  - generic [ref=e34]:
                    - checkbox
                  - checkbox [ref=e35]
              - columnheader "Program Name " [ref=e36] [cursor=pointer]:
                - text: Program Name
                - generic [ref=e37]: 
              - columnheader "Program Description " [ref=e39] [cursor=pointer]:
                - text: Program Description
                - generic [ref=e40]: 
              - columnheader "Program Status " [ref=e42] [cursor=pointer]:
                - text: Program Status
                - generic [ref=e43]: 
              - columnheader "Edit / Delete" [ref=e45]
          - rowgroup [ref=e46]:
            - row [ref=e47]:
              - gridcell [ref=e48]:
                - generic [ref=e50] [cursor=pointer]:
                  - generic [ref=e51]:
                    - checkbox
                  - checkbox [ref=e52]
              - gridcell "javalmsapp" [ref=e53]
              - gridcell "testing lms" [ref=e54]
              - gridcell "Active" [ref=e55]
              - gridcell [ref=e56]:
                - generic [ref=e58]:
                  - button [ref=e59] [cursor=pointer]:
                    - generic [ref=e60]: 
                  - button [ref=e61] [cursor=pointer]:
                    - generic [ref=e62]: 
            - row [ref=e63]:
              - gridcell [ref=e64]:
                - generic [ref=e66] [cursor=pointer]:
                  - generic [ref=e67]:
                    - checkbox
                  - checkbox [ref=e68]
              - gridcell "dfdcdc" [ref=e69]
              - gridcell [ref=e70]
              - gridcell "Active" [ref=e71]
              - gridcell [ref=e72]:
                - generic [ref=e74]:
                  - button [ref=e75] [cursor=pointer]:
                    - generic [ref=e76]: 
                  - button [ref=e77] [cursor=pointer]:
                    - generic [ref=e78]: 
            - row [ref=e79]:
              - gridcell [ref=e80]:
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]:
                    - checkbox
                  - checkbox [ref=e84]
              - gridcell "SitaLmsApp" [ref=e85]
              - gridcell [ref=e86]
              - gridcell "Active" [ref=e87]
              - gridcell [ref=e88]:
                - generic [ref=e90]:
                  - button [ref=e91] [cursor=pointer]:
                    - generic [ref=e92]: 
                  - button [ref=e93] [cursor=pointer]:
                    - generic [ref=e94]: 
            - row [ref=e95]:
              - gridcell [ref=e96]:
                - generic [ref=e98] [cursor=pointer]:
                  - generic [ref=e99]:
                    - checkbox
                  - checkbox [ref=e100]
              - gridcell "dfghyju" [ref=e101]
              - gridcell "LMS application" [ref=e102]
              - gridcell "Active" [ref=e103]
              - gridcell [ref=e104]:
                - generic [ref=e106]:
                  - button [ref=e107] [cursor=pointer]:
                    - generic [ref=e108]: 
                  - button [ref=e109] [cursor=pointer]:
                    - generic [ref=e110]: 
            - row [ref=e111]:
              - gridcell [ref=e112]:
                - generic [ref=e114] [cursor=pointer]:
                  - generic [ref=e115]:
                    - checkbox
                  - checkbox [ref=e116]
              - gridcell "dfghy" [ref=e117]
              - gridcell "LMS application" [ref=e118]
              - gridcell "Active" [ref=e119]
              - gridcell [ref=e120]:
                - generic [ref=e122]:
                  - button [ref=e123] [cursor=pointer]:
                    - generic [ref=e124]: 
                  - button [ref=e125] [cursor=pointer]:
                    - generic [ref=e126]: 
            - row [ref=e127]:
              - gridcell [ref=e128]:
                - generic [ref=e130] [cursor=pointer]:
                  - generic [ref=e131]:
                    - checkbox
                  - checkbox [ref=e132]
              - gridcell "qqqqqvaniwww" [ref=e133]
              - gridcell "Intro to Java" [ref=e134]
              - gridcell "Active" [ref=e135]
              - gridcell [ref=e136]:
                - generic [ref=e138]:
                  - button [ref=e139] [cursor=pointer]:
                    - generic [ref=e140]: 
                  - button [ref=e141] [cursor=pointer]:
                    - generic [ref=e142]: 
            - row [ref=e143]:
              - gridcell [ref=e144]:
                - generic [ref=e146] [cursor=pointer]:
                  - generic [ref=e147]:
                    - checkbox
                  - checkbox [ref=e148]
              - gridcell "xxxaaavaniww" [ref=e149]
              - gridcell "Azure Cloud" [ref=e150]
              - gridcell "Active" [ref=e151]
              - gridcell [ref=e152]:
                - generic [ref=e154]:
                  - button [ref=e155] [cursor=pointer]:
                    - generic [ref=e156]: 
                  - button [ref=e157] [cursor=pointer]:
                    - generic [ref=e158]: 
            - row [ref=e159]:
              - gridcell [ref=e160]:
                - generic [ref=e162] [cursor=pointer]:
                  - generic [ref=e163]:
                    - checkbox
                  - checkbox [ref=e164]
              - gridcell "vaniawswww" [ref=e165]
              - gridcell "DevOps" [ref=e166]
              - gridcell "Active" [ref=e167]
              - gridcell [ref=e168]:
                - generic [ref=e170]:
                  - button [ref=e171] [cursor=pointer]:
                    - generic [ref=e172]: 
                  - button [ref=e173] [cursor=pointer]:
                    - generic [ref=e174]: 
            - row [ref=e175]:
              - gridcell [ref=e176]:
                - generic [ref=e178] [cursor=pointer]:
                  - generic [ref=e179]:
                    - checkbox
                  - checkbox [ref=e180]
              - gridcell "vaniwwww" [ref=e181]
              - gridcell "Intro to Java" [ref=e182]
              - gridcell "Active" [ref=e183]
              - gridcell [ref=e184]:
                - generic [ref=e186]:
                  - button [ref=e187] [cursor=pointer]:
                    - generic [ref=e188]: 
                  - button [ref=e189] [cursor=pointer]:
                    - generic [ref=e190]: 
            - row [ref=e191]:
              - gridcell [ref=e192]:
                - generic [ref=e194] [cursor=pointer]:
                  - generic [ref=e195]:
                    - checkbox
                  - checkbox [ref=e196]
              - gridcell "vaniwww" [ref=e197]
              - gridcell "Azure Cloud" [ref=e198]
              - gridcell "Active" [ref=e199]
              - gridcell [ref=e200]:
                - generic [ref=e202]:
                  - button [ref=e203] [cursor=pointer]:
                    - generic [ref=e204]: 
                  - button [ref=e205] [cursor=pointer]:
                    - generic [ref=e206]: 
        - generic [ref=e208]:
          - generic [ref=e209] [cursor=pointer]: Showing 1 to 10 of 44 entries
          - button "" [disabled]
          - button "" [disabled]
          - generic [ref=e210]:
            - button "1" [ref=e211] [cursor=pointer]
            - button "2" [ref=e212] [cursor=pointer]
            - button "3" [ref=e213] [cursor=pointer]
            - button "4" [ref=e214] [cursor=pointer]
            - button "5" [ref=e215] [cursor=pointer]
          - button "" [ref=e216] [cursor=pointer]
          - button "" [ref=e218] [cursor=pointer]
        - generic [ref=e220]: In total there are 44 programs.
  - generic:
    - generic:
      - generic:
        - menu:
          - generic:
            - menuitem "Add New Program"
```

# Test source

```ts
  35  |     this.deleteicon = this.page.locator("//button[@id='deleteProgram']").first();
  36  |     this.deleteicon1 = this.page.locator("//button[@icon='pi pi-trash']");
  37  |     this.confirmPage = this.page.locator("//span[normalize-space()='Confirm']");
  38  |     this.yesButton = this.page.locator("//button[@ng-reflect-label='Yes']")
  39  |     this.programDeletedMessage = this.page.locator("//div[normalize-space()='Program Deleted']");
  40  |     this.sortArrow = this.page.locator("//p-sorticon").first();
  41  |     this.sortArrowDesc = this.page.locator("//p-sorticon").nth(2);
  42  |   }
  43  | 
  44  |   async clickProgram() {
  45  |     await this.program.click();
  46  |   }
  47  | 
  48  |   async clickAddNewProgram() {
  49  |     await this.addNewProgram.click();
  50  |   }
  51  | 
  52  |   async clickSaveButton() {
  53  |     await this.saveButton.click();
  54  |   }
  55  | 
  56  |   async clickCancelButton() {
  57  |     await this.cancelButton.click();
  58  |   }
  59  | 
  60  |   async clickXButton(){
  61  |     await this.xButton.click();
  62  |   }
  63  | 
  64  |   async enterValidDetails() {
  65  |     console.log('Program Name:', this.programName);
  66  |     console.log('Program Description:', this.programDescription)
  67  |     await this.programNameField.fill(this.programName);
  68  |     await this.programDescriptionField.fill(this.programDescription);
  69  |     await this.programActiveCheckbox.click();
  70  |     await this.programSaveButton.click();
  71  |   }
  72  | 
  73  |   async successfullBinkText() {
  74  |     await expect(this.successMessage).toBeVisible();
  75  |   }
  76  | 
  77  |   async enterInValidDetails() {
  78  |     console.log('Invalid Program Name:', this.invalidProgramName);
  79  |     await this.programNameField.fill(this.invalidProgramName);
  80  |   }
  81  | 
  82  |   async verifyErrorMessage() {
  83  |     await expect(this.errorMessage).toBeVisible();
  84  |   }
  85  | 
  86  |   async searchProgram() {
  87  |     await this.searchInput.fill(this.programName);;
  88  |     await this.page.mouse.click(500, 300);
  89  |     await expect(this.page.getByText(this.programName)).toBeVisible();
  90  |     await expect(this.page.getByText(this.programDescription)).toBeVisible();
  91  |     //await expect(this.page.getByText(this.programName, { exact: true })).toBeVisible();
  92  |     //await expect(this.page.getByText(this.programDescription, { exact: true })).toBeVisible();
  93  |   }
  94  | 
  95  |   async editProgram() {
  96  |     await this.editButton.click()
  97  |   }
  98  | 
  99  |   async editProgramDetails() {
  100 |     await this.programNameField.fill(this.newProgramName);
  101 |     await this.programDescriptionField.fill(this.newProgramDescription);
  102 |     await this.programSaveButton.click();
  103 |     await expect(this.newSuccessMessage).toBeVisible();
  104 |   }
  105 | 
  106 |   async searchNewProgram() {
  107 |     await this.searchInput.fill(this.newProgramName);;
  108 |     await expect(this.page.getByText(this.newProgramName)).toBeVisible();
  109 |     await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
  110 |     await this.page.waitForTimeout(500)
  111 |   }
  112 | 
  113 |   async verifyUpdatedProgramDetails() {
  114 |     await expect(this.page.getByText(this.newProgramName)).toBeVisible();
  115 |     await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
  116 |   }
  117 | 
  118 |   async clickDeleteButton() {
  119 |     await this.page.mouse.click(500, 300);
  120 |     await this.deleteicon.click();
  121 |   }
  122 | 
  123 |   async confirmDelete() {
  124 |     await expect(this.confirmPage).toBeVisible();
  125 |     await this.yesButton.click();
  126 |     await expect(this.programDeletedMessage).toBeVisible();
  127 |   }
  128 | 
  129 |   async clickMultiplePrograms() {
  130 |     await this.page.mouse.click(500, 300);
  131 |     const checkboxcount = this.page.locator("//div[@role='checkbox']");
  132 |   
  133 |     for (let i=1; i <=2 ; i++ )
  134 |     {
> 135 |       await expect(checkboxcount.nth(i)).click();
      |                                          ^ TypeError: expect(...).click is not a function
  136 |     }
  137 |     //await this.page.locator("//div[@role='checkbox']").nth(1).click();
  138 |     //await this.page.locator("//div[@role='checkbox']").nth(2).click();
  139 |   }
  140 | 
  141 |   async confirmMultipleDelete() {
  142 |     await this.deleteicon1.first().click();
  143 |     await expect(this.confirmPage).toBeVisible();
  144 |     await this.yesButton.click();
  145 |     await expect(this.programDeletedMessage).toBeVisible();
  146 |   }
  147 | 
  148 |   async clickSortArrow() {
  149 |     await this.page.mouse.click(500, 300);
  150 |     await this.sortArrow.click();
  151 |   }
  152 | 
  153 |   async verifyAscendingOrder() {
  154 |     const programNames = (await this.page.locator("//td[1]").allTextContents()).map(name => name.trim()).filter(Boolean);
  155 |     const sortedProgramNames = [...programNames].sort((a, b) => a.localeCompare(b));
  156 |     expect(programNames).toEqual(sortedProgramNames);
  157 |   }
  158 | 
  159 |   async verifyDescendingOrder(){
  160 |     await this.sortArrow.click();
  161 |     const programNames = (await this.page.locator("//td[1]").allTextContents()).map(name => name.trim()).filter(Boolean);
  162 |     const sortedProgramNames = [...programNames].sort((a, b) => b.localeCompare(a));
  163 |     expect(programNames).toEqual(sortedProgramNames);
  164 |   }
  165 | 
  166 | }
```