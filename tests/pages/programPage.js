import { expect } from '@playwright/test';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginData = require('../test-data/loginData.json');
const programData = require('../test-data/programData.json');
import { createLogger } from '../../utils/logger.js';
const logger = createLogger('Program');
export class ProgramPage

{
  constructor(page, env, test) {
    this.page = page;
    this.env = env;
    this.test = test;

    this.programName = programData.programName;
    this.programDescription = programData.programDescription;
    this.invalidProgramName = programData.invalidProgramName;
    this.newProgramName = programData.newProgramName;
    this.newProgramDescription = programData.newProgramDescription;
    this.programNameviasearch = programData.programNameviasearch;
    this.program = page.locator("//button[@id='program']");
    this.addNewProgram = page.getByRole('menuitem', { name: 'Add New Program' });
    this.saveButton = page.locator("//button[@id='saveProgram']");
    this.cancelButton = page.locator("//button[@label='Cancel']");
    this.xButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
    this.programNameField = page.getByRole('textbox', { name: 'Name *' });
    this.programDescriptionField = page.getByRole('textbox', { name: 'Description' });
    this.programActiveCheckbox = page.locator("//p-radiobutton[@id='category']").first();
    this.programSaveButton = page.getByRole('button', { name: 'Save' });
    this.successMessage = page.locator("//div[normalize-space()='Program Created Successfully']");
    this.errorMessage = page.locator("//small[normalize-space()='This field should start with an alphabet, no special char other than a hyphen and have min 4 char.']");
    this.searchInput = this.page.locator("//input[@placeholder='Search...']");
    this.editButton = this.page.locator("//button[@id='editProgram']").first();
    this.newSuccessMessage = page.locator("//div[normalize-space()='Program Updated']");
    this.deleteicon = this.page.locator("//button[@id='deleteProgram']").first();
    this.deleteicon1 = this.page.locator("//button[@icon='pi pi-trash']");
    this.confirmPage = this.page.locator("//span[normalize-space()='Confirm']");
    this.yesButton = this.page.locator("//button[@ng-reflect-label='Yes']")
    this.noButton = this.page.locator("//button[@ng-reflect-label='No']")
    this.programDeletedMessage = this.page.locator("//div[normalize-space()='Program Deleted']");
    this.multipleProgramDeletedMessage = this.page.locator("//div[normalize-space()='Programs Deleted']");
    this.sortArrow = this.page.locator("//p-sorticon").first();
    this.sortArrowDesc = this.page.locator("//p-sorticon").nth(2);
    this.clickNext = this.page.locator("//span[contains(@class,'pi-angle-right')]");
    this.clickLast = this.page.locator("//span[contains(@class,'pi-angle-double-right')]");
    this.clickPrevious = this.page.locator("//span[contains(@class,'pi-angle-left')]");
    this.clickFirst = this.page.locator("//span[contains(@class,'pi-angle-double-left')]");
  }

  async clickProgram() {
    await this.program.click();
  }

  async clickAddNewProgram() {
    await this.addNewProgram.click();
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }

  async clickXButton(){
    await this.xButton.click();
  }

  async enterValidDetails() {
    console.log('Program Name:', this.programName);
    console.log('Program Description:', this.programDescription)
    await this.programNameField.fill(this.programName);
    await this.programDescriptionField.fill(this.programDescription);
    await this.programActiveCheckbox.click();
    await this.programSaveButton.click();
  }

  async successfullBinkText() {
    await expect(this.successMessage).toBeVisible();
  }

  async enterInValidDetails() {
    console.log('Invalid Program Name:', this.invalidProgramName);
    await this.programNameField.fill(this.invalidProgramName);
  }

  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
  }

  async searchProgram() {
    await this.page.mouse.click(500, 300);
    await this.searchInput.fill(this.programName);;
    await expect(this.page.getByText(this.programName)).toBeVisible();
    await expect(this.page.getByText(this.programDescription)).toBeVisible();
    //await expect(this.page.getByText(this.programName, { exact: true })).toBeVisible();
    //await expect(this.page.getByText(this.programDescription, { exact: true })).toBeVisible();
  }

  async editProgram() {
    await this.editButton.click()
  }

  async editProgramDetails() {
    await this.programNameField.fill(this.newProgramName);
    await this.programDescriptionField.fill(this.newProgramDescription);
    await this.programSaveButton.click();
    await expect(this.newSuccessMessage).toBeVisible();
  }

  async searchNewProgram() {
    await this.searchInput.fill(this.newProgramName);;
    await expect(this.page.getByText(this.newProgramName)).toBeVisible();
    await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
    await this.page.waitForTimeout(500)
  }

  async verifyUpdatedProgramDetails() {
    await expect(this.page.getByText(this.newProgramName)).toBeVisible();
    await expect(this.page.getByText(this.newProgramDescription)).toBeVisible();
  }

  async clickDeleteButton() {
    await this.page.mouse.click(500, 300);
    await this.deleteicon.click();
  }

  async confirmDelete() {
    await expect(this.confirmPage).toBeVisible();
    await this.yesButton.click();
    await expect(this.programDeletedMessage).toBeVisible();
  }

  async clickMultiplePrograms() {
    await this.page.mouse.click(500, 300);
    const checkboxcount = this.page.locator("//div[@role='checkbox']");
  
    for (let i=1; i <=2 ; i++ )
    {
      await checkboxcount.nth(i).click();
    }
    //await this.page.locator("//div[@role='checkbox']").nth(1).click();
    //await this.page.locator("//div[@role='checkbox']").nth(2).click();
  }

  async confirmMultipleDelete() {
    await this.deleteicon1.first().click();
    await expect(this.confirmPage).toBeVisible();
    await this.yesButton.click();
    await expect(this.multipleProgramDeletedMessage).toBeVisible();
  }

  async declineDelete() {
    await this.deleteicon1.first().click();
    await expect(this.confirmPage).toBeVisible(); 
    await this.noButton.click();
    const checkboxcount = this.page.locator("//div[@role='checkbox']");
  
    for (let i=1; i <=2 ; i++ )
    {
      await expect(this.checkboxcount).nth(i).toBeVisible();
    }

  }

  async clickSortArrow() {
    await this.page.mouse.click(500, 300);
    await this.sortArrow.click();
  }

  async verifyAscendingOrder() {
    const programNames = (await this.page.locator("//td[1]").allTextContents()).map(name => name.trim()).filter(Boolean);
    const sortedProgramNames = [...programNames].sort((a, b) => a.localeCompare(b));
    expect(programNames).toEqual(sortedProgramNames);
  }

  async verifyDescendingOrder(){
    await this.sortArrow.click();
    const programNames = (await this.page.locator("//td[1]").allTextContents()).map(name => name.trim()).filter(Boolean);
    const sortedProgramNames = [...programNames].sort((a, b) => b.localeCompare(a));
    expect(programNames).toEqual(sortedProgramNames);
  }

  async clickNextPage() { 
    await this.page.mouse.click(500, 300); 
    await this.clickNext.click(); 
  } 
  async verifyNextPage() {  
    await expect(this.page.getByRole('button', { name: '2', exact: true })).toHaveClass(/p-highlight/);
  }

  async clickLastPage() { 
    await this.page.mouse.click(500, 300); 
    await this.clickLast.click(); 
  } 

  async verifyLastPage() { 
    await expect(this.clickLast).toBeDisabled();
  }

  async clickPreviousPage() { 
    await this.page.mouse.click(500, 300); 
    await this.clickLast.click(); 
    await this.clickPrevious.click();
  }

  async verifyPreviousPage() { 
    await expect(this.clickPrevious).toBeEnabled();
  }

  async clickFirstPage() { 
    await this.page.mouse.click(500, 300); 
    await this.clickLast.click(); 
    await this.clickFirst.click();
  }

  async verifyFirstPage() { 
    await expect(this.clickFirst).toBeDisabled();
  }

}