//Import the path function and all the view functions
const { path } = require("./createRoute");
const { homeJs, defaultRoute, getAllEntertainers, getEntertainer, addEntertainer, editEntertainer, deleteEntertainer } = require("./views");

//Define routes
const paths = [
    path("get", "/", getAllEntertainers),
    path("get", "/first", homeJs),
    path("get", "/getEntertainer/:id", getEntertainer),
    path("post", "/add", addEntertainer),
    path("put", "/edit/:id", editEntertainer),
    path("delete", "/delete/:id", deleteEntertainer)
];

module.exports = paths;