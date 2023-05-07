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
                sh 'jest selenium-test.js'
            }
        }
        stage('Test') {
        parallel {
        stage('Selenium') {
          steps {
            sh 'jest selenium-test.js'
          }
          post {
            always {
              junit 'reports/selenium/**/*.xml'
            }
          }
        }

    }
}
