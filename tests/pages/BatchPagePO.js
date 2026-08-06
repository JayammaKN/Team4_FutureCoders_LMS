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

  }

  async clickBatchButton(){
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
    await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
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
    await this.addNewBatchButton.click();
  }
  async verifyBatchDialogBox(){
    return await this.batchDialogBox.isVisible(); 
  }
}
    