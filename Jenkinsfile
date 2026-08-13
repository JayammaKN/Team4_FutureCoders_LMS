// helper function to reuse(isUnix()) function to works on both Mac and Windows
def runCmd(String cmd) {
    if (isUnix()) {
        sh cmd        // Mac/Linux
    } else {
        bat cmd       // Windows
    }
}

pipeline {
    agent none

    stages {

        stage('Cross-browser / Cross-platform Matrix') {
            matrix {
                axes {
                    axis {
                        name 'PLATFORM'
                        values 'windows-agent', 'mac-agent'
                    }
                    axis {
                        name 'BROWSER'
                        values 'chromium', 'firefox', 'webkit'
                    }
                }
                agent { label "${PLATFORM}" }

                tools {
                    nodejs 'NodeJS'
                    allure 'allure'
                }

                stages {

                    stage('Clean Workspace') {
                        steps {
                            cleanWs()
                        }
                    }

                    stage('Checkout') {
                        steps {
                            echo "Cloning repository from GitHub on ${PLATFORM} / ${BROWSER}..."
                            checkout scm
                        }
                    }

                    stage('Install Dependencies') {
                        steps {
                            echo 'Installing npm dependencies...'
                            script { runCmd('npm install') }
                        }
                    }

                    stage('Install Playwright Browsers') {
                        steps {
                            echo "Installing Playwright browser: ${BROWSER}..."
                            script { runCmd("npx playwright install --with-deps ${BROWSER}") }
                        }
                    }

                    stage('Create .env File') {
                        steps {
                            echo 'Creating .env file...'
                            withCredentials([
                                string(credentialsId: 'BaseUrl', variable: 'BASE_URL'),
                                usernamePassword(
                                    credentialsId: 'CRM_CREDENTIALS',
                                    usernameVariable: 'USER_NAME',
                                    passwordVariable: 'PASSWORD'
                                )
                            ]) {
                                script {
                                    writeFile file: '.env',
                                    text: """
                                    BaseUrl=${BASE_URL}
                                    Username=${USER_NAME}
                                    Password=${PASSWORD}
                                    """
                                    runCmd(isUnix() ? 'cat .env' : 'type .env')
                                }
                            }
                        }
                    }

                    stage('Generate BDD Tests') {
                        steps {
                            echo 'Generating BDD test files...'
                            script { runCmd('npx bddgen') }
                        }
                    }

                    stage('Run Playwright BDD Tests') {
                        steps {
                            echo "Running Playwright BDD tests on ${BROWSER}..."
                            script {
                                try {
                                    runCmd("npx playwright test --project=${BROWSER} --reporter=html,allure-playwright")
                                } catch (err) {
                                    echo "Some tests failed on ${PLATFORM}/${BROWSER}: ${err}"
                                    currentBuild.result = 'UNSTABLE'
                                }
                            }
                        }
                    }

                    stage('Stash Results') {
                        steps {
                            script {
                                if (isUnix()) {
                                    sh 'ls -la allure-results || echo "WARNING: allure-results not found!"'
                                } else {
                                    bat 'if exist allure-results (dir allure-results) else (echo WARNING: allure-results not found!)'
                                }
                            }
                            // Raw allure-results get stashed so the final stage can merge
                            // every platform/browser combo into one combined report
                            stash name: "allure-${PLATFORM}-${BROWSER}",
                                  includes: 'allure-results/**',
                                  allowEmpty: true
                        }
                    }
                }

                post {
                    always {
                        publishHTML([
                            allowMissing: true,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'playwright-report',
                            reportFiles: 'index.html',
                            reportName: "Playwright Report - ${PLATFORM} - ${BROWSER}"
                        ])
                        allure([
                            includeProperties: false,
                            jdk: '',
                            results: [[path: 'allure-results']]
                        ])
                    }
                }
            }
        }

        stage('Publish Combined Allure Report') {
            // Runs once, after every matrix cell finishes, merging all their
            // stashed allure-results into a single cross-browser/cross-platform report
            agent { label 'mac-agent' }
            tools {
                nodejs 'NodeJS'
                allure 'allure'
            }
            steps {
                script {
                    def platforms = ['windows-agent', 'mac-agent']
                    def browsers  = ['chromium', 'firefox', 'webkit']

                    runCmd(isUnix() ? 'rm -rf combined-allure-results' : 'if exist combined-allure-results rmdir /s /q combined-allure-results')
                    runCmd(isUnix() ? 'mkdir -p combined-allure-results' : 'mkdir combined-allure-results')

                    platforms.each { platform ->
                        browsers.each { browser ->
                            unstash "allure-${platform}-${browser}"
                            runCmd(isUnix()
                                ? "cp -r allure-results/* combined-allure-results/ 2>/dev/null || true"
                                : "xcopy allure-results combined-allure-results /E /I /Y")
                        }
                    }
                }
            }
            post {
                always {
                    allure([
                        includeProperties: false,
                        jdk: '',
                        results: [[path: 'combined-allure-results']]
                    ])
                    echo 'Combined cross-browser / cross-platform report published!'
                }
            }
        }
    }

    post {
        success {
            echo 'All Tests Passed across all browsers and platforms!'
        }
        failure {
            echo 'Tests Failed! Check Console Output'
        }
        unstable {
            echo 'Some Tests Failed — Check Allure and Playwright Reports!'
        }
    }
}