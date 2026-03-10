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
        stage('Exécution des Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}