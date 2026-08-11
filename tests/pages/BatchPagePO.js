import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const batchData = require('../test-data/batchData.json');
import { createLogger } from '../../utils/Logger.js';
const logger = createLogger("BatchPagePO");

export default class BatchPagePO {

  constructor(page, env) {
    this.page = page;
    this.env = env;

    this.batchButton = page.locator("//div//button[3][@class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base']");
    this.manageBatchHeading = page.getByText(' Manage Batch');
    this.addNewBatchSubMenu = page.getByText('Add New Batch');
    this.overlayer = page.locator('.cdk-overlay-backdrop')
    this.headerdeleteIcon = page.locator("//mat-card-title//span[@class= 'p-button-icon pi pi-trash']/..");
    this.paginationControls = page.locator("//div[@class='p-paginator-bottom p-paginator p-component ng-star-inserted']");
    this.editIconsInRows = page.locator("//button//span[@class='p-button-icon pi pi-pencil']");
    this.deleteIconsInRows = page.locator("//button//span[@class='p-button-icon pi pi-trash']");
    this.checkboxInRows = page.locator("//div//span[@class='p-checkbox-icon']");
    this.tableHeaderNames = page.locator("//table//thead//th[position() > 1]");
    this.headerRowCheckbox = page.locator("//div[@class='p-checkbox-box']");
    this.sortIconsInHeader = page.locator("//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']");
    this.addNewBatchButton = page.getByText('Add New Batch');
    this.batchDialogBox = page.locator("//div[@role='dialog']");
    this.batchNameinputField = page.locator("//label[text()='Batch Name']/following::input[1]");
    this.descriptionInput = page.locator("//input[@id='batchDescription']");
    this.noOfClassesInput = page.locator("//input[@id='batchNoOfClasses']");
    this.programNameDropdown = page.locator("p-autocomplete[ng-reflect-field='programName']");
    this.statusRadioButton = page.locator('.p-radiobutton-box').first();
    this.programNameDropdownButton = page.locator('.p-autocomplete-dropdown');
    this.selectProgramName = page.locator("//ul[@role='listbox']//li[@role='option']");
    this.batchNameSuffix = page.locator("//input[@id='batchName' and (not(@hidden) or @hidden='false')]");
    this.batchSuffixErrorMessage = page.locator("//small[@id='text-danger']");
    this.saveButton = page.getByText('Save');
    this.batchSuccessMessage = page.locator("//div[@class='p-toast-message-content']");
    this.successMessageSummary = page.locator(".p-toast-summary")
    this.successMessageDetail = page.locator(".p-toast-detail");
    this.emptyNoOfClassesFieldEmpty = page.getByText('Number of classes is required.');
    this.cancelButton = page.getByText('Cancel');
    this.closeButton = page.locator("//button//span[@class='p-dialog-header-close-icon ng-tns-c81-8 pi pi-times']");
    this.dialogBoxClose = page.locator("p-dialog").filter({ hasText: "Batch Details" });
    this.batchNameField = page.locator("#batchName").nth(1);
    this.programNameInput = page.locator("p-autocomplete[ng-reflect-field='programName'] input.p-autocomplete-input");
    this.deleteDialogBox = page.locator("p-confirmdialog .p-dialog");
    this.noDdeleteButton = page.locator('.p-confirm-dialog-reject');
    this.yesDeleteButton = page.locator('.p-confirm-dialog-accept');
    this.batchRows = this.batchRows = page.locator("p-table table tbody tr");
    this.deleteDialogBoxCloseIcon = page.locator('p-confirmDialog button.p-dialog-header-close');
    this.ckeckbox = page.locator("tbody tr .p-checkbox-box");
    this.nextPage = page.locator('p-paginator .p-paginator-next');
    this.lastPage = page.locator(' p-paginator .p-paginator-last');
    this.pageLinks = page.locator("p-paginator .p-paginator-pages button");
    this.previousPage = page.locator('p-paginator .p-paginator-prev');
    this.firstPage = page.locator('p-paginator .p-paginator-first');
    this.tableRows = page.locator('p-table tbody tr');
    this.searchBar = page.getByPlaceholder('Search...');
    this.batchNameColumn = page.locator('p-table table tbody tr td:nth-child(2)');
    // this.batchNameColumn = page.locator('p-table .p-datatable-wrapper table tbody.p-datatable-tbody tr td:nth-child(1) .ng-star-inserted');
    this.batchDescriptiomColumn = page.locator('p-table table tbody tr td:nth-child(3)');
    this.batchStatusColumn = page.locator('p-table table tbody tr td:nth-child(4)');
    this.NoOfClassesColumn = page.locator('p-table table tbody tr td:nth-child(5)');
    this.programNameColumn = page.locator('p-table table tbody tr td:nth-child(6)');
    this.sortBatchName = page.locator("//th[@psortablecolumn='batchName']//i[contains(@class,'p-sortable-column-icon')]");
    this.sortBatchDescription = page.locator("//th[@psortablecolumn='batchDescription']//i[contains(@class,'p-sortable-column-icon')]")
    this.sortBatchStatus = page.locator("//th[@psortablecolumn='batchStatus']//i[contains(@class,'p-sortable-column-icon')]");
    this.sortNoOfClasses = page.locator("//th[@psortablecolumn='batchNoOfClasses']//i[contains(@class,'p-sortable-column-icon')]");
    this.sortProgramName = page.locator("//th[@psortablecolumn='programName']//i[contains(@class,'p-sortable-column-icon')]");



  }

  async clickBatchButton(){
    logger.info("click batchbutton on navigation bar");
    await this.batchButton.click();
  }
  async verifyManageBatchPageHeading(){
    const heading = await (this.manageBatchHeading).textContent();
        return heading;
  }
  async addNewBatchSubMenu(){
    return await this.addNewBatchSubMenu.textContent();
  }

  async closeOverlay() {
    await this.page.mouse.click(0, 0); 
  }
  async verifyDeleteIconInHeader(){
    return await this.headerdeleteIcon.isDisabled();
  }
  async verifyPagintionControls(){
    return await this.paginationControls.isVisible();
  }
  async verifyEditIconsInRows(){
    const editIconCount = await this.editIconsInRows.count();
    if(editIconCount === 0) return false;
    for (let i =0; i<editIconCount; i++){
      await (this.editIconsInRows.nth(i)).isVisible();
    }
    return true;
  }

  async verifydeleteIconsInRows(){
    const deleteIconCount = await this.deleteIconsInRows.count();
    if(deleteIconCount === 0) return false;
    for (let i =0; i<deleteIconCount; i++){
      await (this.deleteIconsInRows.nth(i)).isVisible();
    }
    return true;
  }
  async verifyCheckboxesInRows(){
    const checkBoxCount = await this.checkboxInRows.count();
    if(checkBoxCount === 0) return false;
    for (let i =0; i<checkBoxCount; i++){
      await (this.checkboxInRows.nth(i)).isVisible();
    }
    return true;
  }
  async verifyHeaderNames(){
    await this.tableHeaderNames.first().waitFor({state: 'visible'});
    const headerNames = await this.tableHeaderNames.all();
    let headerText = [];
    for (const header of headerNames){
      const text = await header.textContent();
      headerText.push(text.trim());
    }
    return headerText;
  }
  async verifyHeaderRowCheckbox(){
    return await this.headerRowCheckbox.isVisible();
  }

  async verifySortIconsInHeader(){
    const sortIconCount = await this.sortIconsInHeader.count();
    if(sortIconCount === 0) return false;
    for (let i =0; i<sortIconCount; i++){
      await (this.sortIconsInHeader.nth(i)).isVisible();
    }
    return true;
  }
  async clickAddNewBatchButton(){
    logger.info("clicking add new batch to navigate to add new batch dialog box")
    await this.addNewBatchButton.click();
  }
  async verifyBatchDialogBox(){
    return await this.batchDialogBox.isVisible(); 
  }
  async verifyBatchNameInputField(){
    return await this.batchNameinputField.isVisible();
  }
  async verifyDescriptionInputField(){
    return await this.descriptionInput.isVisible();
  }
  async verifyNoOfClassesInputField(){
    return await this.noOfClassesInput.isVisible();
  }
  async verifyProgramDropdown(){
    return await this.programNameDropdown.isVisible();
  }
  async verifyStatusRadioButton(){
    return await this.statusRadioButton.isVisible();
  }
  async verifyProgramDropdownButton(){
    await this.programNameDropdownButton.click();
  }
  async selectProgramNameFromDropdown(){
    await this.selectProgramName.nth(2).click();
  }
  async verifySelectedProgramNameInBatchPrefix(){
    const batchPrefix = await this.batchNameinputField.inputValue();
    return this.batchPrefix;
  }
  async enterAlphabetsInBatchNameSuffix(){
    await this.batchNameSuffix.fill('ADXS');
  }
  async getBatchSuffixErrorMessage(){
    return await this.batchSuffixErrorMessage.textContent();
  }
  async enterAlphabetsInBatchNamePrefix(){
    const filledBatchPrefix = await this.batchNameinputField.inputValue();
    await this.batchNameinputField.press('A');
    const enteredBatchPrefix = await this.batchNameinputField.inputValue();
    console.log('Filled Batch Prefix:', filledBatchPrefix);
    console.log('Entered Batch Prefix:', enteredBatchPrefix);
    return filledBatchPrefix === enteredBatchPrefix;
  }
  async verifyEmptyBatchPrefix(){
    const batchPrefixValue = await this.batchNameinputField.inputValue();
    return batchPrefixValue === '';
  }
  async clickstatusRadioButton(){
    await this.statusRadioButton.click();
  }
  async enterMandatoryFields(){
     logger.info("Entering mandatory fields for batch creation");
    await this.verifyProgramDropdownButton();
    await this.selectProgramNameFromDropdown();
    const batchSuffix = batchData.mandatoryFieldsData;
    await this.batchNameSuffix.fill(batchSuffix.batchNameSuffix);
    await this.clickstatusRadioButton();
    const noOfClasses = batchData.mandatoryFieldsData;
    await this.noOfClassesInput.fill(noOfClasses.noOfClasses);
  }
  async clickSaveButton(){
    await this.saveButton.click();
  }
  async getBatchSuccessMessage(){
    return await this.successMessageSummary.innerText();
  }
  async verifyWithEmptyMandatoryField(){
    await this.verifyProgramDropdownButton();
    await this.selectProgramNameFromDropdown();
    const batchSuffix = batchData.emptyMandatoryFieldData;
    await this.batchNameSuffix.fill(batchSuffix.batchNameSuffix);
    await this.clickstatusRadioButton();
    const noOfClasses = batchData.emptyMandatoryFieldData;
    await this.noOfClassesInput.fill(noOfClasses.noOfClasses);
  }
  async verifyEmptyNoOfClassesErrorMessage(){
    return await this.emptyNoOfClassesFieldEmpty.textContent();
  }
  async clickCancelButton(){
    await this.cancelButton.click();
  }
  async verifyIsBatchDialogBoxClosed(){
    return await this.dialogBoxClose.isHidden();
    //  await this.batchDialogBox.waitFor({ state: 'hidden' });
  }
  async clickCloseButton(){
    await this.closeButton.click();
  }

  async enterAllFields(){
    await this.verifyProgramDropdownButton();
    await this.selectProgramNameFromDropdown();
    const batchSuffix = batchData.allFieldsData;
    await this.batchNameSuffix.fill(batchSuffix.batchNameSuffix);
    const Description = batchData.allFieldsData;
    await this.descriptionInput.fill(Description.description);
    await this.clickstatusRadioButton();
    const noOfClasses = batchData.allFieldsData;
    await this.noOfClassesInput.fill(noOfClasses.noOfClasses);
  }
  async clickEditIcon(){
    logger.info("Clicking Edit icon for batch");
    await this.editIconsInRows.nth(6).click();
  }
  async verifyBatchNameFieldDisabled(){
    return await this.batchNameField.isDisabled();
  }
  async editWithInvalidData(){
    const Description = batchData.invalidEditData;
    await this.descriptionInput.fill(Description.description);
    const NoOfClasses = batchData.invalidEditData;
    await this.noOfClassesInput.fill(NoOfClasses.noOfClasses);  
  }
  async verifyNoOfClassesWithInvalidData(){
    const value = await this.noOfClassesInput.inputValue();
    return value === "";
  }
  
async verifyProgramNameIsSelected() {
    const currentValue = await this.programNameInput.inputValue();

    if (!currentValue || currentValue.trim() === "") {
        // await this.verifyProgramDropdownButton();
        await this.programNameDropdownButton.click();
        await this.page.locator("//ul[@role='listbox']//li[@role='option']").first().click();
    }
}

  async editWithValidData(){
    await this.verifyProgramNameIsSelected();
    const Description = batchData.validEditData;
    await this.descriptionInput.fill(Description.description);
    await this.clickstatusRadioButton();
    const NoOfClasses = batchData.validEditData;
    await this.noOfClassesInput.fill(NoOfClasses.noOfClasses);
  }
  async clickDeleteIcon(){
    await this.deleteIconsInRows.nth(1).click();
     await this.deleteDialogBox.waitFor({ state: "visible" });
  }
  async verifyDeleteConfirmDialogBox(){
    const isDialogBoxVisible = await this.deleteDialogBox.isVisible();
    const isYesDeleteButtonVisible = await this.yesDeleteButton.isVisible();
    const isNoDeleteButtonVisible = await this.noDdeleteButton.isVisible();
    return{
      isDialogBoxVisible,
      isYesDeleteButtonVisible,
      isNoDeleteButtonVisible
    };
  }
 async clickYesDeleteButton(){
    this.beforeDeletebatchCount = await this.batchRows.count(); 
    await this.deleteIconsInRows.nth(2).click();
    await this.yesDeleteButton.click();
}

  async clickNoDeleteButton(){
    this.beforeDeletebatchCount = await this.batchRows.count();
    await this.deleteIconsInRows.nth(2).click();
    await this.noDdeleteButton.click();
  }
  async verifyIsBatchDeleted(){
    const afterDeleteBatchCount = await this.batchRows.count();
    return{
      beforeDeleteCount : this.beforeDeletebatchCount,
      afterDeleteBatchCount
    };
  }
  async verifyIsDeleteDialogboxClosed(){
    return await this.deleteDialogBox.isHidden();
    await this.deleteDialogBox.waitFor({ state: "hidden" });
  }
  async verifyBatchNotDeleted(){
    const afterDeleteBatchCount = await this.batchRows.count();
    return{
      beforeDeleteCount : this.beforeDeletebatchCount,
      afterDeleteBatchCount
    };
  }
  async clickDeleteDialogBoxCloseIcon(){
    await this.deleteDialogBoxCloseIcon.click();
    await this.deleteDialogBox.waitFor({ state: "hidden" });
  }
  async selectMultipleCheckBoxes(count=2){
    for(let i=0; i<count; i++){
      await this.ckeckbox.nth(i).check();
    }
  }
  async verifyHeaderdeleteIconEnabled(){
    return await this.headerdeleteIcon.isEnabled();
  }
  async clickHeaderdeleteIcon(){
    await this.headerdeleteIcon.click();
  }
  async clickNextPage(){
     logger.info("Navigating to next page");
    await this.nextPage.click();
  }
  async verifyNextPageEnabled(){
    return await this.nextPage.isEnabled();
  }
  async clickLastPage(){
    logger.info("Navigating to last page");
    await this.lastPage.click();
  }
  async isOnLastPage() {
    const pageCount = await this.pageLinks.count();
    const lastPageIndex = pageCount - 1;

    const lastPageButton = this.pageLinks.nth(lastPageIndex);
    const classes = await lastPageButton.getAttribute("class");

    return classes.includes("p-highlight");
}
async verifyNextPageDiabled(){
  return await this.nextPage.isDisabled();
}
async verifyLastPageState() {
    const lastPage = await this.isOnLastPage();
    const nextDisabled = await this.verifyNextPageDiabled();

    return lastPage && nextDisabled;
}
async clickPreviousPage(){
   logger.info("Navigating to previous page");
  await this.previousPage.click();
}
async verifyPreviousPageDiabled(){
  return await this.previousPage.isDisabled();
}
async getCurrentPageNumber() {
    const count = await this.pageLinks.count();

    for (let i = 0; i < count; i++) {
        const pages = await this.pageLinks.nth(i).getAttribute("class");
        if (pages.includes("p-highlight")) {
          const pageNo = i+1;
           console.log("Current Page:", pageNo);
            return pageNo;   
        }
    }
}
async clickFirstPage(){
  await this.firstPage.click();
}
async verifyFirstPageDiabled(){
  return await this.firstPage.isDisabled();
}
async isFirstPageDisabled() {
    const pages = await this.firstPage.getAttribute("class");
    return pages.includes("p-disabled");
}
async verifyNextPageIsEnabled(){
  return await this.nextPage.isEnabled();
}
async verifyLastPageIsEnabled(){
  return await this.lastPage.isEnabled();
}
async enterSearchText(searchKey){
  logger.info(`Searching for batch using key: ${searchKey}`);
  const searchText = batchData.searchBarData[searchKey];
  await this.searchBar.fill(searchText);
}
async getRowCount(){
  return await this.tableRows.count();
}
async getColumnText(column){
  await this.page.waitForTimeout(300);
  const count = await column.count();
  const values = [];
  for(let i=0; i < count; i++){
    const Text = await column.nth(i).innerText();
        values.push(Text.trim());
  }
  return values;
}
getColumn(searchKey){
  const columnMap = {
    batchName: this.batchNameColumn,
    batchDescription: this.batchDescriptiomColumn,
    noOfClasses: this.NoOfClassesColumn,
    batchStatus: this.batchStatusColumn,
    programName: this.programNameColumn
  };
  return columnMap[searchKey];
}
async enterNonExistingBatchName(){
  const searchText = batchData.searchBarData;
  await this.searchBar.fill(searchText.nonexistingBatch);
  await this.page.waitForTimeout(300);
}
async clickSort(columnKey){
  const sortMap = {
        batchName: this.sortBatchName,
        batchDescription: this.sortBatchDescription,
        noOfClasses: this.sortNoOfClasses,
        batchStatus: this.sortBatchStatus,
        batchProgramName: this.sortProgramName
    };
    logger.info(`Sorting column: ${columnKey}`);
    await sortMap[columnKey].click();
    await this.page.waitForTimeout(500);
  }
  async getColumnValues(columnKey){
  const columnMap = {
        batchName: this.batchNameColumn,
        batchDescription: this.batchDescriptiomColumn,
        noOfClasses: this.NoOfClassesColumn,
        batchStatus: this.batchStatusColumn,
        batchProgramName: this.programNameColumn
    };
    const column = columnMap[columnKey];
    const count = await column.count();
    const values = [];
    for (let i = 0; i < count; i++) {
        const text = await column.nth(i).textContent();
        values.push(text.trim());
    }
    console.log("VALUES:", values);
    return values;
  }
   isAscendingOrder(values) {
    //  if (!Array.isArray(values)) {
    //     throw new Error("isAscendingOrder: values is not an array");
    // }
        const sorted = [...values].sort((a, b) => a.localeCompare(b));
        return JSON.stringify(values) === JSON.stringify(sorted);
    }
    isDescendingOrder(values) {
    //   if (!Array.isArray(values)) {
    //     throw new Error("isDescendingOrder: values is not an array");
    // }
        const sorted = [...values].sort((a, b) => b.localeCompare(a));
        return JSON.stringify(values) === JSON.stringify(sorted);
    }
     isAscendingOrderNumeric(values) {
        const nums = values.map(Number);
        const sorted = [...nums].sort((a, b) => a - b);
        return JSON.stringify(nums) === JSON.stringify(sorted);
    }
    isDescendingOrderNumeric(values) {
        const nums = values.map(Number);
        const sorted = [...nums].sort((a, b) => b - a);
        return JSON.stringify(nums) === JSON.stringify(sorted);
    }






}
    