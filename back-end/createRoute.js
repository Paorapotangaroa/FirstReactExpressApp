//Mimic the path function from django
function path(method, route, viewFunction) {
    return {
        path: route,
        method: method,
        handler: viewFunction
    }
}

module.exports = { path }