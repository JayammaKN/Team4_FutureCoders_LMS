// LogoutPage - a simple Page Object for the Logout feature.
// It stores the locators and gives easy to read helper methods
// that the step definitions call.
import logger from '../../utils/logger.js';

export default class LogoutPage {
  constructor(page) {
    this.page = page;

    // The Logout button in the menu bar (it has id="logout")
    this.logoutButton = this.page.locator('#logout');

    // The Login button shown on the login page after logout
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }

  // Clicks the Logout button in the menu bar
  async clickLogout() {
    await this.logoutButton.click();
    logger.info('Clicked the Logout button in the menu bar');
  }
}
