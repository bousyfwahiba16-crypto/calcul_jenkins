pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' 
    }

    stages {
        stage('Installation des dépendances') {
            steps {
                bat 'npm install'
            }
        }
    }
}