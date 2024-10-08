pipeline {
    agent any  // This specifies that Jenkins can run the pipeline on any available agent

    environment {
        NODE_OPTIONS = '--openssl-legacy-provider' // Sets the necessary Node.js option to avoid potential errors
    }

    tools {
        nodejs 'NodeJS' // Ensure NodeJS is installed and configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git branch: 'main', url: 'https://github.com/Oluwapelumi10/capstone-frontend-main.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh '/bin/sh -c "npm install"'
            }
        }

        stage('Run Application') {
            steps {
                // Start the application
                sh '/bin/sh -c "npm start"'
            }
        }

        stage('Test Application') {
            steps {
                // Run tests if you have any
                // Uncomment the following line if you have tests to run
                sh '/bin/sh -c "npm test"'
            }
        }
    }

    post {
        success {
            // Notify on success, you can integrate Slack or email here
            echo 'Build completed successfully!'
        }
        failure {
            // Notify on failure
            echo 'Build failed. Please check the logs.'
        }
    }
}
