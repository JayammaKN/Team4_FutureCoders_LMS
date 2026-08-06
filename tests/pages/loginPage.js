export default class loginPage {

  constructor(page, env) {
    this.page = page;
    this.env = env;

    this.logo = 'img[alt="lms-logo"]';
    this.companyName = '#companyName';
    this.userField = '#username';
    this.passwordField = '#password';
    this.roleDropdown = '#role';
    this.userInput = page.locator("//input[@formcontrolname='userLoginEmailId']");
    this.passwordInput = page.locator("//input[@formcontrolname='password']");
    this.roledropdown = page.locator('.mat-select-trigger');
    this.selectRole = page.locator("//span[normalize-space()='Admin']");
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async openValidUrl() {
    await this.page.goto(this.env.validUrl);
  }

  async openInvalidUrl() {
    await this.page.goto(this.env.invalidUrl).catch(() => {});
  }

  async getResponseStatus() {
    const response = await this.page.waitForEvent('response');
    return response.status();
  }

  async login(username, password) {
    await this.userInput.fill(this.env.username);
    await this.passwordInput.fill(this.env.password);
    await this.roledropdown.click();
    await this.selectRole.click();
    await this.loginButton.click();
  }
}
