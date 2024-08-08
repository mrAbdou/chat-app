# CHAT APP

## overview
    chat app is a javascript full stack web app that is built using: 
        - React App : js library that is used to build the interface of this application
            this react app uses :
                - React redux : to manage the global state of the application in one place
                - ...
        - Express Server: node js application that runs on port 5000 (you can adjust it as you like) that gives you access to the backend functionalities through http request GET, POST, PUT, DELETE ... 
        - Socket io Server : built on top of express server to manage the real time communications between different instances of the CHAT APP application

## Installation
    for now i don't now the complete installation process, it  should be ready to add when the project ends
    
    the only step that i could say is to run : 
    ```bash
        git clone your-repo-link
        cd your-project
        npm install

    to run the server once only : 
    ```bash
        npm run start
    
    to run the server in development mode that watches any changes at any file in your server folder and reload the server for you : 
    ```bash
        npm run dev

    to build the client react application directly on your server folder:
    ```bash
        npm run build-client
    
    to build the client app and run the server at the same time in one instruction : 
    ```bash
        npm run start-all

    to build client app and run the server at the same time then reload the browser tab on any change on your server folder:
    ```bash
        npm run start-with-browser-sync
