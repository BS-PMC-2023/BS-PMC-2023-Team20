pipeline {
    agent {
        docker {
            image 'node:19-alpine'
            args '-p 3000:3000'
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
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npx cypress run --browser chrome --headless --record --key 0c5f0a5e-5b1e-4b0e-9b0e-8b0e9b0e9b0e'
            }
        }
    }
}
