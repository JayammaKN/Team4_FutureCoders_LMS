// LoginPage - a "Page Object" for the Login screen.
//
// A Page Object wraps the page's HTML elements (locators) and actions
// (login, open URL, etc.) into simple methods, so the test steps stay
// clean and easy to read.
//
// Example: a step says "Admin is on login Page", which calls:
//     loginFixture.openValidUrl()

// Load test data from the JSON file (native ESM import, no require needed)
import loginData from '../test-data/loginData.json' with { type: 'json' };

// Get a logger that prints with the [Login] tag, e.g.
//   [INFO] 2026-08-09T21:14:42.422Z [Login] - Loading page: ...
import { createLogger } from '../../utils/logger.js';
const logger = createLogger('Login');

export default class LoginPage {

  // -------------------------------------------------------------
  // constructor - store the page, environment, and all locators
  // -------------------------------------------------------------
  constructor(page, env, test) {
    // Playwright "page" object - the browser tab we are testing
    this.page = page;
    // Environment settings (URL, username, password, role)
    this.env = env;
    // The Playwright test object, used for nice step names in the report
    this.test = test;

    // Expected text values (from loginData.json)
    this.title = loginData.title;
    this.loginMessage = loginData.loginMessage;

    // ---- Locators: ways to find elements on the page ----
    // "By text/label" (recommended - most stable)
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

    // "By id" (the same elements, found by HTML id attribute)
    this.userFieldById = this.page.locator('#username');
    this.passwordFieldById = this.page.locator('#password');
    this.roleDropdownById = this.page.locator('mat-select');
    this.loginButtonById = this.page.locator('#login');
    this.logoutButtonById = this.page.locator('#logout');

    // Every login attempt is saved here.
    // Each entry: { username, password, role, errors } where errors is
    // the list of error messages shown by the page (empty if login worked).
    this.attempts = [];
  }

  // -------------------------------------------------------------
  // URL helpers
  // -------------------------------------------------------------

  // Open the real (valid) LMS app URL and remember the HTTP status code
  async openValidUrl() {
    await this.test.step(`Open URL: ${this.env.validUrl}`, async () => {
      this.lastStatus = await this.captureStatus(this.env.validUrl);
      logger.navigation(this.env.validUrl, this.lastStatus);
    });
  }

  // Try to open a bad URL and remember whether the page showed an error
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

  // true if the page did NOT load correctly for an invalid URL
  async invalidUrlShowsError() {
    return (
      this.failedToNavigate === true ||          // navigation threw an error
      this.lastStatus === 0 ||                   // no response at all
      this.lastStatus >= 400 ||                  // HTTP error (404, 500, ...)
      !(await this.isLoginPageLoaded())          // page did not load at all
    );
  }

  // true when the Login button can be seen (login page rendered)
  async isLoginPageLoaded() {
    return this.loginButton.isVisible().catch(() => false);
  }

  // Try every bad URL from the JSON file and save the results
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

  // Return only the bad URLs that did NOT show an error (test failures)
  async getInvalidUrlFailures() {
    return this.invalidUrlResults
      .filter((result) => !result.showsError)
      .map((result) => result.url);
  }

  // Open a URL and return the HTTP status code (200 = OK, 404 = not found)
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

  // -------------------------------------------------------------
  // Login helpers
  // -------------------------------------------------------------

  // Fill the form and click Login.
  // You can override any value: login() logs in as the default admin,
  // login({ password }) only overrides the password, etc.
  async login({ username = this.env.username, password = this.env.password, role = this.env.role } = {}) {
    await this.test.step(`Login as ${username || this.env.username}`, async () => {
      if (username) await this.userField.fill(username);   // type the username
      if (password) await this.passwordField.fill(password); // type the password
      if (role) {
        await this.selectRole(role);                       // pick a role
      }
      await this.loginButton.click();                       // click Login
      await this.waitForLoginResult();                      // wait for page to react

      // Check the result: did we reach the home page or get an error?
      let errors = [];
      if (await this.isHomePage()) {
        logger.loginSuccess(username || this.env.username);
      } else {
        errors = await this.getErrorMessages();
        logger.loginFailed(username || this.env.username, errors.join(' | ') || 'unknown');
      }

      // Save this attempt so the test can check every login's error
      this.attempts.push({ username, password, role, errors });
    });
  }

  // Same as login() but typing with the keyboard only (no mouse clicks)
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

  // Wait until either the Logout button (login worked) or an
  // error message (login failed) appears. First one wins.
  async waitForLoginResult() {
    await Promise.race([
      this.logoutButton.waitFor({ timeout: 15000 }).catch(() => {}),
      this.page.getByRole('alert').first().waitFor({ timeout: 15000 }).catch(() => {}),
    ]);
  }

  // Pick a role from the dropdown. "method" can be 'mouse' (default) or 'keyboard'.
  async selectRole(role, method = 'mouse') {
    await this.roleDropdown.click();
    if (method === 'keyboard') {
      // keyboard: type the first letter then press Enter
      await this.page.keyboard.type(role[0]);
      await this.page.keyboard.press('Enter');
    } else {
      // mouse: click the option with that exact name
      await this.page.getByRole('option', { name: role }).click();
    }
  }

  // true if the home page is showing (Logout button is visible)
  async isHomePage() {
    return this.logoutButton.first().isVisible().catch(() => false);
  }

  // -------------------------------------------------------------
  // Error message helpers
  // -------------------------------------------------------------

  // Find a specific error message on the page (an alert containing "message")
  getError(message) {
    return this.page.getByRole('alert').filter({ hasText: message.trim() });
  }

  // Get ALL error messages currently on the page, as a list of clean strings
  async getErrorMessages() {
    return (await this.page.getByRole('alert').allTextContents()).map((t) => t.trim());
  }

  // -------------------------------------------------------------
  // Text / title helpers
  // -------------------------------------------------------------

  getTitle() {
    return loginData.title;
  }

  getLoginMessage() {
    return loginData.loginMessage;
  }

  async getPageTitle() {
    return this.page.title();
  }

  // -------------------------------------------------------------
  // UI / style checks
  // -------------------------------------------------------------

  // Find the red * required marker next to a field
  requiredMarkerFor(field) {
    return this.page
      .locator('mat-form-field', { has: field })
      .locator('.mat-form-field-required-marker');
  }

  // Find the floating label text of a field
  getPlaceholderLabel(field) {
    return this.page
      .locator('mat-form-field', { has: field })
      .locator('.mat-form-field-label');
  }

  // Open the role dropdown and return the list of options
  async getDropdownOptions() {
    await this.roleDropdown.click();
    const texts = await this.page.getByRole('option').allTextContents();
    await this.page.keyboard.press('Escape');
    return texts.map((t) => t.trim());
  }

  // true if the login form is centered horizontally on the page
  async isLoginFormCentered() {
    const box = await this.page.locator('form').first().boundingBox();
    const viewport = this.page.viewportSize();
    return Math.abs(box.x + box.width / 2 - viewport.width / 2) < 2;
  }

  // true if all the field labels are left-aligned with their input boxes
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
}
