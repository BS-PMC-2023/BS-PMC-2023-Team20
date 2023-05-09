pipeline {
    agent {
        docker {
            image 'cypress/base:14.17.0'
            args '-p 3005:3005'
        }
    }
    environment{
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'xvfb-run npx cypress run'
            }
        }
    }
}
