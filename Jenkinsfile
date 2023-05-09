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
                sh 'npm install lambdatest-cypress-cli'

            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npm run cypress:lambda'
            }
        }
    }
}