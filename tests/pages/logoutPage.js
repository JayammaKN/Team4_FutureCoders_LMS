
import { createLogger } from '../../utils/logger.js';
const logger = createLogger('Logout');

export default class LogoutPage {
  constructor(page) {
    this.page = page;

    this.logoutButton = this.page.locator('#logout');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }
  async clickLogout() {
    await this.logoutButton.click();
    logger.info('Clicked the Logout button in the menu bar');
  }
}
