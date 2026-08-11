import loginData from '../test-data/loginData.json' with { type: 'json' };
import { createLogger } from '../../utils/logger.js';
const logger = createLogger('Login');

export default class LoginPage {

  constructor(page, env, test) {
    this.page = page;
    this.env = env;
    this.test = test;

    this.title = loginData.title;
    this.loginMessage = loginData.loginMessage;

    this.companyName = this.page.locator('img[src*="LMS-logo"]');
    this.logo = this.page.locator('img[src*="LMS-logo"]');
    this.userField = this.page.getByLabel('User');
    this.passwordField = this.page.getByLabel('Password');
    this.roleDropdown = this.page.getByRole('combobox', { name: 'Select the role' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.logoutButton = this.page.getByRole('button', { name: 'Logout' });
    this.homeButton = this.page.getByRole('button', { name: 'Home' });
    this.programButton = this.page.getByRole('button', { name: 'Program' });
    this.batchButton = this.page.getByRole('button', { name: 'Batch' });

    this.userFieldById = this.page.locator('#username');
    this.passwordFieldById = this.page.locator('#password');
    this.roleDropdownById = this.page.locator('mat-select');
    this.loginButtonById = this.page.locator('#login');
    this.logoutButtonById = this.page.locator('#logout');

    this.attempts = [];
  }

  async openValidUrl() {
    await this.test.step(`Open URL: ${this.env.validUrl}`, async () => {
      this.lastStatus = await this.captureStatus(this.env.validUrl);
      logger.navigation(this.env.validUrl, this.lastStatus);
    });
  }

  async openInvalidUrl(url) {
    await this.test.step(`Try opening invalid URL: ${url}`, async () => {
      this.lastStatus = null;
      this.failedToNavigate = false;
      try {
        const response = await this.page.goto(url, { timeout: 15000 });
        this.lastStatus = response ? response.status() : 0;
      } catch (err) {
        this.failedToNavigate = true;
        this.lastStatus = 0;
        logger.warn(`Navigation to invalid URL failed: ${url}`);
      }
    });
  }

  async invalidUrlShowsError() {
    return (
      this.failedToNavigate === true ||
      this.lastStatus === 0 ||
      this.lastStatus >= 400 ||
      !(await this.isLoginPageLoaded())
    );
  }

  async isLoginPageLoaded() {
    return this.loginButton.isVisible().catch(() => false);
  }

  async openAllInvalidUrls() {
    this.invalidUrlResults = [];
    for (const url of loginData.invalidUrls) {
      await this.openInvalidUrl(url);
      this.invalidUrlResults.push({
        url,
        showsError: await this.invalidUrlShowsError(),
      });
    }
  }

  async getInvalidUrlFailures() {
    return this.invalidUrlResults
      .filter((result) => !result.showsError)
      .map((result) => result.url);
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
      if (username) await this.userField.fill(username);
      if (password) await this.passwordField.fill(password);
      if (role) {
        await this.selectRole(role);
      }
      await this.loginButton.click();
      await this.waitForLoginResult();

      let errors = [];
      if (await this.isHomePage()) {
        logger.loginSuccess(username || this.env.username);
      } else {
        errors = await this.getErrorMessages();
        logger.loginFailed(username || this.env.username, errors.join(' | ') || 'unknown');
      }

      this.attempts.push({ username, password, role, errors });
    });
  }

  async loginWithKeyboard() {
    await this.test.step('Login using keyboard only', async () => {
      await this.userField.pressSequentially(this.env.username);
      await this.passwordField.pressSequentially(this.env.password);
      await this.roleDropdown.press('Enter');
      await this.page.keyboard.press('Enter');
      await this.page.keyboard.press('Escape');
      await this.loginButton.press('Enter');
      await this.waitForLoginResult();

      let errors = [];
      if (await this.isHomePage()) {
        logger.loginSuccess(this.env.username);
      } else {
        errors = await this.getErrorMessages();
        logger.loginFailed(this.env.username, errors.join(' | ') || 'unknown');
      }

      this.attempts.push({ username: this.env.username, password: this.env.password, role: this.env.role, errors });
    });
  }

  async waitForLoginResult() {
    await Promise.race([
      this.logoutButton.waitFor({ timeout: 15000 }).catch(() => {}),
      this.page.getByRole('alert').first().waitFor({ timeout: 15000 }).catch(() => {}),
    ]);
  }

  async selectRole(role, method = 'mouse') {
    await this.roleDropdown.click();
    if (method === 'keyboard') {
      await this.page.keyboard.type(role[0]);
      await this.page.keyboard.press('Enter');
    } else {
      await this.page.getByRole('option', { name: role }).click();
    }
  }

  async isHomePage() {
    return this.logoutButton.first().isVisible().catch(() => false);
  }

  getError(message) {
    return this.page.getByRole('alert').filter({ hasText: message.trim() });
  }

  async getErrorMessages() {
    return (await this.page.getByRole('alert').allTextContents()).map((t) => t.trim());
  }

  getTitle() {
    return loginData.title;
  }

  getLoginMessage() {
    return loginData.loginMessage;
  }

  async getPageTitle() {
    return this.page.title();
  }

  requiredMarkerFor(field) {
    return this.page
      .locator('mat-form-field', { has: field })
      .locator('.mat-form-field-required-marker');
  }

  getPlaceholderLabel(field) {
    return this.page
      .locator('mat-form-field', { has: field })
      .locator('.mat-form-field-label');
  }

  async getDropdownOptions() {
    await this.roleDropdown.click();
    const texts = await this.page.getByRole('option').allTextContents();
    await this.page.keyboard.press('Escape');
    return texts.map((t) => t.trim());
  }

  async isLoginFormCentered() {
    const box = await this.page.locator('form').first().boundingBox();
    const viewport = this.page.viewportSize();
    return Math.abs(box.x + box.width / 2 - viewport.width / 2) < 2;
  }

  async areLabelsLeftAligned() {
    const aligned = async (field) => {
      const fieldBox = await field.boundingBox();
      const labelBox = await this.getPlaceholderLabel(field).boundingBox();
      return Math.abs(fieldBox.x - labelBox.x) < 2;
    };
    return (
      (await aligned(this.userField)) &&
      (await aligned(this.passwordField)) &&
      (await aligned(this.roleDropdown))
    );
  }

  // async login(username, password) {
  //   await this.userInput.fill(this.env.username);
  //   await this.passwordInput.fill(this.env.password);
  //   await this.roledropdown.click();
  //   await this.selectRole.click();
  //   await this.loginButton.click();
  // }
}
