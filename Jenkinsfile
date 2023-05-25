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
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm ci'
            }
        }

        stage('start local server') {
            steps {
                // start local server in the background
                // we will shut it down in "post" command block
                sh 'nohup npm run start &'
            }
        }
 
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npm ci'
                sh 'npx cypress run'
            }
        }
        
        stage('Coverage') {
            steps {
                sh 'npm run test -- --coverage --watchAll=false'
                sh 'npm ci'
                // You can include additional steps here to process or display the coverage results
            }
        }
    }
    post {
        always {
            echo 'Stopping local server'
            sh 'pkill -f http-server'
        }
    }
}
