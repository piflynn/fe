pipeline {
    agent { docker { image 'node:22.15.1-alpine3.21' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
