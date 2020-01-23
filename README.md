# Kinduct_web
This project provides rich UI from where we can upload players records file in JSON format, check players list, view players detail infomation, and delete single player either on home page or player detail page.

## Project pre-requires
1. npm v6.13.4+
2. NodeJS v12.14.1+
3. React Router
React Router provides routing capabilities to single-page apps(SPA) built in React, and what makes it nice is that extends what you already know about React in familiar ways to give you all of this routing awesomeness.
Pease install it via command `npm i react-router-dom --save` in terminal.

## Run this project
Simply clone this project to your local workspace, switch into the project root directory and run command `npm start`. The default port is 3000, you can visit the home page via `http://localhost:3000/`.

## Functions
1. Home page to list all players, you can view player detail and delete on this page directly.
2. Upload page to upload players file in JSON format.
3. Player detail page with delete function.

## Update host_name and context_root per needs
This project would call server-side REST API provided in project kinduct, the default hostname is `http://localhost/` and project root is `kinduct/`, if the hostname, port number and context root are different in your local, please update accordinly to ensure we can call REST API as expected.
You can update in file `$PROJECT/src/components/global.js`, that would be work for the whole project.

