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
        jdk 'JDK21'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Verify Versions') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'java -version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Verify Environment') {
            steps {
        bat 'if defined LMS_URL (echo LMS_URL is set) else (echo LMS_URL is NOT set)'
        bat 'if defined LMS_USERNAME (echo LMS_USERNAME is set) else (echo LMS_USERNAME is NOT set)'
        bat 'if defined LMS_PASSWORD (echo LMS_PASSWORD is set) else (echo LMS_PASSWORD is NOT set)'
        bat 'if defined LMS_ROLE (echo LMS_ROLE is set) else (echo LMS_ROLE is NOT set)'
            }
        }

        stage('Generate BDD Tests') {
            steps {
                bat 'npx bddgen'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'if exist allure-results rmdir /s /q allure-results'
                bat 'if exist allure-report rmdir /s /q allure-report'
                bat 'if exist test-results rmdir /s /q test-results'
                bat 'if exist playwright-report rmdir /s /q playwright-report'
                bat 'mkdir allure-results'
                bat 'npx playwright test --grep "@LMSNavigationFunc" --project=chromium'
            }
        }
        stage('Generate Allure Report') {
        steps {
                bat 'npx allure-commandline generate allure-results --clean -o allure-report'
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