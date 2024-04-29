pipeline {
    agent any

    environment {
        APP_PORT=3000
        REDIS_HOST=localhost
        REDIS_PORT=6379
        OPEN_WEATHER_API_KEY=568d5fd93ebcb164606d9f99106505e7
        DB_HOST_NAME=localhost
        DB_USER=root
        DB_PASS=root
        DB_NAME=weather
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    docker.build('aap4198/weatherapp:latest')
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Run the Docker container
                    docker.image('aap4198/weatherapp:latest').run('-p', '3030:3030', '--name', 'weather-app-container', '-d')
                }
            }
}


        stage('Cleanup') {
            steps {
                // Stop and remove the Docker container
                sh 'docker stop weather-app-container || true'
                sh 'docker rm weather-app-container || true'
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
