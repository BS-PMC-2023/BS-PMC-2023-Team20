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
        stage('Jest') {
          steps {
            sh 'jest'
          }
          post {
            always {
              junit 'reports/jest/**/*.xml'
              publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports/jest/coverage',
                reportFiles: 'index.html',
                reportName: 'Coverage Report',
                reportTitles: 'Code Coverage Report'
              ])
            }
          }
        }
      }
    }
  
}