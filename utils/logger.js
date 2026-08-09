function timestamp() {
  return new Date().toISOString();
}

function write(module, level, message) {
  const line = `[${level.toUpperCase()}] ${timestamp()} [${module}] - ${message}`;
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

export function createLogger(module) {
  return {
    info: (message) => write(module, 'info', message),
    warn: (message) => write(module, 'warn', message),
    error: (message) => write(module, 'error', message),
    debug: (message) => write(module, 'debug', message),
    navigation: (url, status) => write(module, 'info', `Navigated to ${url} - HTTP ${status}`),
    loginSuccess: (username) => write(module, 'info', `Login successful for user: ${username}`),
    loginFailed: (username, reason) => write(module, 'error', `Login failed for user: ${username} - Reason: ${reason}`),
    logoutSuccess: () => write(module, 'info', 'Logout successful - redirected to the login page'),
  };
}
