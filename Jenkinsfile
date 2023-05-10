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
                sh 'npm start'
                sleep 10 
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
