// Simple logger - prints messages with a timestamp to the console.
// It can easily be replaced with a logging library like winston later.

function timestamp() {
  return new Date().toISOString();
}

const logger = {
  info(message) {
    console.log(`[INFO] ${timestamp()} - ${message}`);
  },
  warn(message) {
    console.warn(`[WARN] ${timestamp()} - ${message}`);
  },
  error(message) {
    console.error(`[ERROR] ${timestamp()} - ${message}`);
  },
  debug(message) {
    console.log(`[DEBUG] ${timestamp()} - ${message}`);
  },

  // Helper methods used by the pages
  loginSuccess(username) {
    this.info(`Login successful for user: ${username}`);
  },
  loginFailed(username, reason) {
    this.error(`Login failed for user: ${username} - Reason: ${reason}`);
  },
  navigation(url, status) {
    this.info(`Navigated to ${url} - HTTP ${status}`);
  },
  logoutSuccess() {
    this.info('Logout successful - redirected to the login page');
  },
};

export default logger;
