//Import settings from the settings file
const { paths, path, app, PORT, express, cors, corsOptions } = require("./settings");

//Allow access to POST request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

//start the app
app.listen(PORT, (req, res) => {
    console.log(`The app is live and running on and can be found here: \n\nhttp://localhost:${PORT}\n`);
});

//Set up each of the routes using routes.js
paths.forEach(route => {
    app[route.method](route.path, route.handler);
});