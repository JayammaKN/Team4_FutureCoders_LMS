import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginData = require('../test-data/loginData.json');
import logger from '../../utils/logger.js';

export default class loginPage {

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

  async openValidUrl() {
    await this.test.step(`Open URL: ${this.env.validUrl}`, async () => {
      this.lastStatus = await this.captureStatus(this.env.validUrl);
      logger.navigation(this.env.validUrl, this.lastStatus);
    });
  }

  async openInvalidUrl() {
    await this.test.step(`Try opening invalid URL: ${this.env.invalidUrl}`, async () => {
      this.lastStatus = null;
      this.failedToNavigate = false;
      await this.page.goto(this.env.invalidUrl).catch(() => {
        this.failedToNavigate = true;
      });
      logger.warn(`Navigation to invalid URL failed: ${this.env.invalidUrl}`);
    });
  }

  async captureStatus(url) {
    try {
      const response = await this.page.goto(url);
      logger.info(`Loading page: ${url}`);
      return response ? response.status() : 0;
    } catch (err) {
      logger.error(`Navigation error for ${url}: ${err.message.split('\n')[0]}`);
      return err.response ? err.response.status() : 0;
    }
  }

  async getResponseStatus() {
    return this.lastStatus;
  }

  navigationFailed() {
    return this.failedToNavigate === true;
  }

  async login({ username = this.env.username, password = this.env.password, role = this.env.role } = {}) {
    await this.test.step(`Login as ${username || this.env.username}`, async () => {
      if (username) await this.page.fill(this.userField, username);
      if (password) await this.page.fill(this.passwordField, password);
      if (role) {
        await this.selectRole(role);
      }
      await this.page.click(this.loginButton);
      await this.waitForLoginResult();
      if (await this.isHomePage()) {
        logger.loginSuccess(username || this.env.username);
      } else {
        const errors = await this.getErrorMessages();
        logger.loginFailed(username || this.env.username, errors.join(' | ') || 'unknown');
      }
    });
  }

  async loginWithKeyboard() {
    await this.test.step('Login using keyboard only', async () => {
      await this.page.locator(this.userField).pressSequentially(this.env.username);
      await this.page.locator(this.passwordField).pressSequentially(this.env.password);
      await this.page.locator(this.roleDropdown).press('Enter');
      await this.page.keyboard.press('Enter');
      await this.page.keyboard.press('Escape');
      await this.page.locator(this.loginButton).press('Enter');
      await this.waitForLoginResult();
      if (await this.isHomePage()) {
        logger.loginSuccess(this.env.username);
      } else {
        const errors = await this.getErrorMessages();
        logger.loginFailed(this.env.username, errors.join(' | ') || 'unknown');
      }
    });
  }

  async waitForLoginResult() {
    await Promise.race([
      this.page.locator('text=Logout').waitFor({ timeout: 15000 }).catch(() => {}),
      this.page.locator('mat-error').first().waitFor({ timeout: 15000 }).catch(() => {}),
    ]);
  }

  async selectRole(role, method = 'mouse') {
    await this.page.click(this.roleDropdown);
    if (method === 'keyboard') {
      await this.page.keyboard.type(role[0]);
      await this.page.keyboard.press('Enter');
    } else {
      await this.page.locator('mat-option', { hasText: role }).click();
    }
  }

  getError(message) {
    return this.page.locator('mat-error', { hasText: message.trim() });
  }

  async getErrorMessages() {
    return (await this.page.locator('mat-error').allTextContents()).map((t) => t.trim());
  }

  async isHomePage() {
    return this.page.locator('text=Logout').first().isVisible().catch(() => false);
  }

  getTitle() {
    return loginData.title;
  }

  getLoginMessage() {
    return loginData.loginMessage;
  }

  requiredMarkerFor(id) {
    return this.page
      .locator('mat-form-field', { has: this.page.locator(id) })
      .locator('.mat-form-field-required-marker');
  }

  getPlaceholderLabel(id) {
    return this.page
      .locator('mat-form-field', { has: this.page.locator(id) })
      .locator('.mat-form-field-label');
  }

  async getDropdownOptions() {
    await this.page.locator(this.roleDropdown).click();
    const texts = await this.page.locator('mat-option').allTextContents();
    await this.page.keyboard.press('Escape');
    return texts.map((t) => t.trim());
  }

  async isLoginFormCentered() {
    const box = await this.page.locator('form').boundingBox();
    const viewport = this.page.viewportSize();
    return Math.abs(box.x + box.width / 2 - viewport.width / 2) < 2;
  }

  async areLabelsLeftAligned() {
    const aligned = async (id) => {
      const fieldBox = await this.page.locator(id).boundingBox();
      const labelBox = await this.getPlaceholderLabel(id).boundingBox();
      return Math.abs(fieldBox.x - labelBox.x) < 2;
    };
    return (
      (await aligned(this.userField)) &&
      (await aligned(this.passwordField)) &&
      (await aligned(this.roleDropdown))
    );
  }

  async login(username, password) {
    await this.userInput.fill(this.env.username);
    await this.passwordInput.fill(this.env.password);
    await this.roledropdown.click();
    await this.selectRole.click();
    await this.loginButton.click();
  }
}
