pipeline {
    agent {
        docker {
            image 'node:19-alpine'
            args '-p 3005:3005'
        }
    }
    environment{
        CI = 'false'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npx cypress install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                beforeScript {
                    sh 'apk add xvfb' // Install Xvfb on Alpine Linux
                    sh 'Xvfb :99 & export DISPLAY=:99' // Start Xvfb and set DISPLAY
                }
                sh 'npx cypress run'
            }
        }
    }
}
