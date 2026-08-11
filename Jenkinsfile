def isWindows() {
    return System.getProperty('os.name').toLowerCase().contains('win')
}

def runScript(String command) {
    if (isWindows()) {
        bat command
    } else {
        sh command
    }
}

def removeDir(String dir) {
    if (isWindows()) {
        bat "if exist ${dir} rmdir /s /q ${dir}"
    } else {
        sh "rm -rf ${dir}"
    }
}

def makeDir(String dir) {
    if (isWindows()) {
        bat "if not exist ${dir} mkdir ${dir}"
    } else {
        sh "mkdir -p ${dir}"
    }
}

def checkEnv(String varName) {
    if (isWindows()) {
        bat "if defined ${varName} (echo ${varName} is set) else (echo ${varName} is NOT set)"
    } else {
        sh "if [ -n \"$${varName}\" ]; then echo \"${varName} is set\"; else echo \"${varName} is NOT set\"; fi"
    }
}

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
                runScript('node -v')
                runScript('npm -v')
                runScript('java -version')
            }
        }

        stage('Install Dependencies') {
            steps {
                runScript('npm ci')
            }
        }

        stage('Verify Environment') {
            steps {
                checkEnv('LMS_URL')
                checkEnv('LMS_USERNAME')
                checkEnv('LMS_PASSWORD')
                checkEnv('LMS_ROLE')
            }
        }

        stage('Generate BDD Tests') {
            steps {
                runScript('npx bddgen')
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                runScript('npx playwright install')
            }
        }

        stage('Run Playwright Tests') {
            steps {
                removeDir('allure-results')
                removeDir('allure-report')
                removeDir('test-results')
                removeDir('playwright-report')
                makeDir('allure-results')
                runScript('npx playwright test --grep ".features-gen/tests/features/program" --project=chromium')
            }
        }
        stage('Generate Allure Report') {
            steps {
                runScript('npx allure-commandline generate allure-results --clean -o allure-report')
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
