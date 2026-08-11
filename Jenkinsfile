pipeline {
    agent any

    environment {
        LMS_URL = credentials('LMS_URL')
        LMS_USERNAME = credentials('LMS_USERNAME')
        LMS_PASSWORD = credentials('LMS_PASSWORD')
        LMS_ROLE = credentials('LMS_ROLE')
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Verify Versions') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'java -version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Verify Environment') {
            steps {
                sh 'if [ -n "$LMS_URL" ]; then echo "LMS_URL is set"; else echo "LMS_URL is NOT set"; fi'
                sh 'if [ -n "$LMS_USERNAME" ]; then echo "LMS_USERNAME is set"; else echo "LMS_USERNAME is NOT set"; fi'
                sh 'if [ -n "$LMS_PASSWORD" ]; then echo "LMS_PASSWORD is set"; else echo "LMS_PASSWORD is NOT set"; fi'
                sh 'if [ -n "$LMS_ROLE" ]; then echo "LMS_ROLE is set"; else echo "LMS_ROLE is NOT set"; fi'
            }
        }

        stage('Generate BDD Tests') {
            steps {
                sh 'npx bddgen'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'rm -rf allure-results'
                sh 'rm -rf allure-report'
                sh 'rm -rf test-results'
                sh 'rm -rf playwright-report'
                sh 'mkdir -p allure-results'
                sh 'npx playwright test --grep ".features-gen/tests/features/program" --project=chromium'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'npx allure-commandline generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
