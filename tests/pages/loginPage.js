export default class loginPage {

  constructor(page, env) {
    this.page = page;
    this.env = env;

    this.logo = 'img[alt="lms-logo"]';
    this.companyName = '#companyName';
    this.userField = '#username';
    this.passwordField = '#password';
    this.roleDropdown = '#role';
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
}
