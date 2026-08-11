
pipeline {
  agent any

  options {
    timestamps()
    timeout(time: 60, unit: 'MINUTES')
  }

  environment {
    LMS_URL      = credentials('LMS_URL')
    LMS_USERNAME = credentials('LMS_USERNAME')
    LMS_PASSWORD = credentials('LMS_PASSWORD')
    LMS_ROLE     = credentials('LMS_ROLE')
  }

  stages {
    stage('Clean Old Reports') {
      steps {
        // Remove test-results / allure-results / playwright-report / allure-report / logs
        // so stale results from a previous build never leak into this one
        osCmd('npm run clean:reports')
      }
    }

    stage('Install Dependencies') {
      steps {
        osCmd('npm ci')
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        script {
          if (isUnix() && sh(script: "uname -s", returnStdout: true).trim() != 'Darwin') {
            sh(label: 'Install browsers (Linux)', script: 'npx playwright install --with-deps')
          } else {
            osCmd('npx playwright install')
          }
        }
      }
    }

    stage('Generate BDD Specs') {
      steps {
        osCmd('npx bddgen')
      }
    }

    stage('Run Tests') {
      steps {
        osCmd('npx playwright test')
      }
    }
  }

  post {
    always {
      script {
        // Publish the report via the Allure plugin so a clickable
        // "Allure Report" link appears on the job page
        allure([
          includeProperties: false,
          jdk: '',
          report: 'allure-report',
          results: [[path: 'allure-results']],
          cleanReport: true,
          cleanResults: true
        ])
      }
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**, logs/**',
        allowEmptyArchive: true
    }
    success {
      echo 'All tests passed!'
    }
    failure {
      echo 'One or more tests failed. Check the archived reports.'
    }
  }
}
def osCmd(String command) {
  if (isUnix()) {
    sh command
  } else {
    bat command
  }
}
