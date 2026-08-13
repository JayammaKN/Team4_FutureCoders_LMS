import {appendFileSync,existsSync,mkdirSync,writeFileSync,} from "node:fs";

const LOG_DIR = "logs";
const LOG_FILE = `${LOG_DIR}/test.log`;

mkdirSync(LOG_DIR, { recursive: true });

function timestamp() {
  return new Date().toISOString();
}

function write(module, level, message) {
  const line = `[${level.toUpperCase()}] ${timestamp()} [${module}] - ${message}`;

  // Print to terminal
  if (level === "error") {
    console.error(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }

  // Write to log file
  appendFileSync(LOG_FILE, `${line}\n`);
}

/**
 * Creates a logger for any module.
 *
 * Example:
 * const logger = createLogger("LoginPage");
 */
export function createLogger(moduleName = "General") {
  return {
    info: (message) => write(moduleName, "info", message),

    warn: (message) => write(moduleName, "warn", message),

    error: (message) => write(moduleName, "error", message),

    debug: (message) => write(moduleName, "debug", message),

    navigation: (url, status) =>
      write(
        moduleName,
        "info",
        `Navigated to ${url}${status ? ` - HTTP ${status}` : ""}`
      ),

    loginSuccess: (username) =>
      write(moduleName, "info", `Login successful for user: ${username}`),

    loginFailed: (username, reason) =>
      write(
        moduleName,
        "error",
        `Login failed for user: ${username} - Reason: ${reason}`
      ),

    logoutSuccess: () =>
      write(
        moduleName,
        "info",
        "Logout successful - redirected to the login page"
      ),
  };
}

/**
 * Clears the log file.
 * Call this once before a test run.
 */
export function clearLogs() {
  mkdirSync(LOG_DIR, { recursive: true });

  // Creates an empty file or clears existing content
  writeFileSync(LOG_FILE, "", "utf8");
}