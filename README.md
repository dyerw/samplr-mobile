
# Samplr Mobile App

## Installing
1. Install dependencies: ```npm i```
2. Install global tools: ```npm install -g cordova```
3. Add your cordova platform by running ```cordova platform add %PLATFORM%``` (android and more)

## Usage
- ```npm run lint``` - runs linting against src folder.
- ```npm run test``` - runs karma + jasmine testing.
- ```npm run start``` - starts a server, with react model replacement and devtools.
- ```npm run start:prod``` - starts a server, with react model replacement and minifications of main html file and js file.
- ```npm run build``` - builds the project (single html file and single js file) as it does for development.
- ```npm run build:prod``` - builds the project (single html file and single js file) as it does for production.

## Build and run as application
As you do with any cordova application, ```cordova build android```, ```cordova run android``` and more.

cordova runs ```npm run build:prod``` before any cordova command (using hooks).
