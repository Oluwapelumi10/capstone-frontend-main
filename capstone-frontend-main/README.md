# Capstone-frontend
This is the front of the capstone client management system, which has a backend based on springboot microservice.
This frontend application contains the UI components, relevant routes, data binding components and response handlers mapped to the Backend API endpoints.

# Setting up the Capstone React App on a Windows Machine
### Pre-requisite
The backend microservice (`https://github.com/bkssdev/capstone-backend`) must be setup and running, before the frontend application can be started with all functionality working.

### Set up
The Capstone Frontend is based on Node.js 
and you can find the Windows Node.js installation instructions via Steps 1-3 of the following installation guideline:

https://phoenixnap.com/kb/install-node-js-npm-on-windows

#### NOTE: 

You need to confirm successful installation of Node.js by executing the following commands:

    `node -v`
    `npm -v`

The commands above should respond with the versions of installed node and npm respectively

If using Windows 7 operating system on your laptop/machine, you will require an older version of Nodejs e.g. Node v13 or older

1. For manual setup: Go to https://github.com/bkssdev/capstone-frontend
   
    Then, download the project code by clicking on the “Code” dropdown and select “Download Zip”

   But, if you prefer a more automated approach of setting up the frontend code, you will need to install git. 

   Then, clone the Capstone frontend app from your IDE or CLI using the command:

   `git clone git@github.com:bkssdev/capstone-frontend.git`

2. Save the downloaded frontend code to a workspace on your laptop/machine e.g. C:\Workspace
3. Unzip the downloaded frontend code
4. Open a command line window and cd (change directory) to the project root e.g. C:\Workspace\capstone-frontend-main
5. Type and enter the following command to start the application :  `npm start`
6. The application will open in the browser : http://localhost:3000

#### NOTE:

If application did not start up via browser after executing `npm start`,

If using the got the following error on macOs or any OS

   `Error: error:0308010C:digital envelope routines::unsupported`

Then execute the following on the command line:

   `export NODE_OPTIONS=--openssl-legacy-provider`

You may need to execute the following steps, but these steps will be displayed on the CMD console, if its applicable

Fix the dependency tree, try following the steps below in the exact order:
1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder i.e.C:\Workspace\capstone-frontend-main\package-lock.json.
2. Delete node_modules in your project folder.
3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
4. Run npm install
5. Try running npm ls webpack in your project folder. This will tell you which other package (apart from the expected react-scripts) installed webpack.

 
