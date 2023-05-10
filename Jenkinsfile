pipeline {
    agent {
        docker {
            image 'node:19-alpine'
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
                sh 'npx cypress install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npx eslint --format json . > eslint-report.json'
                beforeScript {
                    sh 'apk add xvfb' // Install Xvfb on Alpine Linux
                    sh 'Xvfb :99 & export DISPLAY=:99' // Start Xvfb and set DISPLAY
                }
                sh 'npx cypress run'
            }
        }
        stage('Publish ESLint Report') {
            steps {
                script {
                    def report = readFile('eslint-report.json')
                    def issues = []
                    def eslintResults = new groovy.json.JsonSlurper().parseText(report)
            
                    eslintResults.each { result ->
                        def filePath = result.filePath
                        result.messages.each { message ->
                            def severity = message.severity == 2 ? 'ERROR' : 'WARNING'
                            def issue = [
                                'fileName': filePath,
                                'category': 'Lint',
                                'type': 'ESLint',
                                'message': message.message,
                                'severity': severity,
                                'lineStart': message.line,
                                'lineEnd': message.line,
                                'columnStart': message.column,
                                'columnEnd': message.column
                            ]
                            issues.add(issue)
                        }
                    }
            
                    recordIssues tools: [[pattern: 'eslint-report.json', parser: 'ESLint']], aggregatingResults: false, issues: issues
                }
            }
        }
    }
}
