pipeline{

    agent any 

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','firefox','edge'], description: "Enter the choice browser where you want to execute your script")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }

        stage('Testing'){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}
            }
        }

        stage('Deploying'){
            echo "Deploy the application"
        }
    }

}
            