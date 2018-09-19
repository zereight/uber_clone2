"use strict";
exports.__esModule = true;
console.log("work!");
var app_1 = require("./app");
var PORT = process.env.PORT || 4000;
var PLAYGROUND_ENDPOINT = "/playground";
var GRAPHQL_ENDPOINT = "/graphql";
var appOptions = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};
var handleAppStart = function () {
    console.log("Listening on port " + PORT);
};
app_1["default"].start(appOptions, handleAppStart);
