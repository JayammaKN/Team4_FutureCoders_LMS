# Team4_FutureCoders_LMS

Automated UI testing for the LMS application using Playwright with BDD (Gherkin/Playwright BDD).

## What this project does

This project tests the LMS web app automatically. It checks the **Login**, **Home**,**Program**,**Batch** and **Logout** pages across three browsers:

- Chromium
- Firefox
- WebKit

## Tech stack

- [Playwright Test](https://playwright.dev/) - test runner
- [Playwright BDD](https://playwright-bdd.js.org/) - write tests in Gherkin (`.feature` files)
- JavaScript (ES Modules)
- [Allure](https://allure.qatools.ru/) + HTML reports
- CI/CD: GitHub Actions + Jenkins

// Folder structure

```
tests/
├── features/          # Gherkin .feature files (login,homepage,programPage,batchPage, logout)
├── steps/             # Step definitions
├── pages/             # Page Object Model classes
├── fixture/           # Playwright fixtures
└── test-data/         # Test data (JSON)
config/
├── env.js             # Reads environment variables
utils/logger.js        # Logging setup
Jenkinsfile            # Jenkins CI/CD pipeline
.github/workflows/     # GitHub Actions workflow
```

//Prerequisites

- Node.js (LTS)
- npm

//Getting started

1. Install dependencies:

    ~bash
   npm install
 

2. Install the browsers:

    ```bash 
   npx playwright install
   ```

3. Add environment variables (create a `.env` file in the project root):

    ```bash
   LMS_URL=http://<lms-url>
   LMS_USERNAME=<username>
   LMS_PASSWORD=<password>
   LMS_ROLE=Admin
  ```

// How to run the tests

1. Generate the BDD test specs:

   ```bash
   npx bddgen
   ```

2. Run all tests:

   ```bash
   npx playwright test
   ```

3. Run a single browser (faster):

   ```bash
   npx playwright test --project=chromium
   ```

4. Run with Allure report:

   ```bash
   npm run test:allure
   npm run report:allure
   npm run open:allure
   ```
5. Run for CI 

   ```npm ci      //It installs the exact versions from package-lock.json
    ```

// Reports

- HTML report - generated in the `playwright-report/` folder after each run
- Allure report- generated in the `allure-report/` folder
- Test results (traces, screenshots, videos) - in the `test-results/` folder

Clean all reports and logs:

```bash
npm run clean:reports
```

// CI/CD

- GitHub Actions- runs the tests automatically on every push/PR to `main` on Linux, macOS, and Windows
- Jenkins - cross-platform pipeline defined in the `Jenkinsfile` (Linux/macOS/Windows)
