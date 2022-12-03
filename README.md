# dbs_hackathon_2022_web_app

## Install Instructions (1st time)
1) This is a NodeJS project and therefore make sure you have NodeJS downloaded and installed. (https://nodejs.org/en/download/)
2) Run ```npm ci``` to install / update all local dependencies required for the project.

## Execute Instructions
1) Run ```npm start``` to launch server normally
2) Run ```npm run dev``` to launch server in dev mode (changes saved will be reflected at run time w/o restarting the server)
3) View the wep page by visiting the URL ```localhost:80``` in the browser

## Build Instructions
1) Run ```npm run build``` to build and package the project into executables
2) Executable files (webapp-linux / webapp-macos / webapp-win.exe) will be generated at the root directory of this project

## Deploy Instructions
1) Make sure you have docker installed
2) Make sure you have flyctl installed (https://fly.io/docs/hands-on/install-flyctl)
3) Follow step 4 to 7 if this is your first time setting up. Otherwise skip to step 8 instead
4) Login to fly.io with ```flyctl auth login```
5) Go to project directory and run ```flyctl launch```, specify app name and deploy region
6) The project should build as a docker project instead of nodejs
7) Select [y] for auto deployment
8) Deploy the application by running the command ```flyctl deploy```

## Essential Commands
1) Run ```npm ci``` to install / update all local dependencies
2) Run ```npm start``` to launch server normally
3) Run ```npm run dev``` to launch server in dev mode (changes saved will be reflected at run time w/o restarting the server)
4) Run ```npm run build``` to build and package the project into executables
