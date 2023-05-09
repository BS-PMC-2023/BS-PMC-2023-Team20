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
                sh 'npm install cypress'

            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npx cypress run'
            }
        }
    }
}