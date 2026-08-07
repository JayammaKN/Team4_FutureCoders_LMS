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

    this.logo = 'img[src*="LMS-logo"]';
    this.companyName = '#companyName';
    this.userField = '#username';
    this.passwordField = '#password';
    this.roleDropdown = 'mat-select';
    this.loginButton = '#login';
  }
/*
async loginApplication()
{
  await this.page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/login');
  await this.page.locator("//input[@id='username']").fill('Lmshackathon@gmail.com');
  await this.page.locator("//input[@id='password']").fill('lmsAug@2026');
  await this.page.getByLabel('Select the role').getByText('Select the role').click();
  await this.page.getByRole('option', { name: 'Admin' }).click();
  await this.page.locator("//button[@id='login']").click();
}*/

  async loginApplication() {

    await this.page.goto(this.env.validUrl);
    await this.page.locator("//input[@id='username']").fill(this.env.username);
    await this.page.locator("//input[@id='password']").fill(this.env.password);
    await this.page.getByLabel('Select the role').getByText('Select the role').click();
    await this.page.getByRole('option', {name: this.env.role}).click();
    await this.page.locator("//button[@id='login']").click();
  }

  async clickProgram() {
    await this.page.locator("//button[@id='program']").click();
  }

}