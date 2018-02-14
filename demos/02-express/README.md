# ExpressJS Example

Based off the guide at: https://expressjs.com/en/starter/generator.html

## Installation
```
npm install express-generator -g
express --view=pug .
npm install
npm start
```

Navigate to http://localhost:3000

## Exploring the Project

**package.json**: Equates to a manifest about the NodeJS application and it's different dependecy packages, configuration and other settings

**app.js**: Main entry point of our express app

**/views**: Folder which contains the different HTML Templated Views used in our app

**/routes**: Folder which contains the different routes or end-points defined in our app

**/public**: Folder which contains the various static assets used by our app like CSS/JS/Images

**/bin/www**: File which defines startup configuration variables used for our app. Allows us to define different configurations without having to modify app.js

