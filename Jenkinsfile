pipeline {
    agent {
        docker {
            image 'cypress/base:18.14.1'
            args '-p 3005:3005'
        }
    }
    environment {
        CI = 'false'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Start Server') {
            steps {
                script {
                    def serverProcess = null
                    try {
                        serverProcess = sh(script: 'npm start &', returnStdout: true)
                        sleep 10 // Wait for the server to start (adjust if necessary)
                    } finally {
                        timeout(time: 2, unit: 'MINUTES') {
                            if (serverProcess) {
                                sh "kill -9 $(lsof -t -i:3005)" // Close the server on port 3005
                            }
                        }
                    }
                }
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npm ci'
                sh 'npx cypress run'
            }
        }
    }
}
