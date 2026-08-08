import { expect } from '@playwright/test';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginData = require('../test-data/loginData.json');
const programData = require('../test-data/programData.json');
import logger from '../../utils/logger.js';
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
    
    //const successMessage = this.successMessage;
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
    await this.searchInput.fill(this.programName);;
    //await expect(this.page.getByText(this.programName, { exact: true })).toBeVisible();
    //await expect(this.page.getByText(this.programDescription, { exact: true })).toBeVisible();
    await this.page.mouse.click(500, 300);
    await expect(this.page.getByText(this.programName)).toBeVisible();
    await expect(this.page.getByText(this.programDescription)).toBeVisible();
    //await this.page.mouse.click(500, 300);
    //await this.page.waitForTimeout(500)
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

}