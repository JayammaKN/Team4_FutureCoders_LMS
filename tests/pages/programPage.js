//import { expect } from '@playwright/test';
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

    this.program = page.locator("//button[@id='program']");
    this.addNewProgram = page.getByRole('menuitem', { name: 'Add New Program' });
    this.saveButton = page.locator("//button[@id='saveProgram']");
    this.cancelButton = page.locator("//button[@label='Cancel']");
    this.xButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
    this.programNameField = page.getByRole('textbox', { name: 'Name *' });
    this.programDescriptionField = page.getByRole('textbox', { name: 'Description' });
    this.programActiveCheckbox = page.page.getByRole('textbox', { name: 'Name *' });
    this.programSaveButton = page.getByRole('button', { name: 'Save' });
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
    await this.programNameField.fill(this.programName);
    await this.programDescriptionField.fill(this.programDescription);
    await this.programActiveCheckbox.check();
    await this.programSaveButton.click();
  }

}