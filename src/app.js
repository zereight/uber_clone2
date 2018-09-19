"use strict";
exports.__esModule = true;
var cors_1 = require("cors");
var graphql_yoga_1 = require("graphql-yoga");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
var App = /** @class */ (function () {
    function App() {
        this.middewares = function () { return ; };
    }
    return App;
}());
 > {
    "this": .app.express.use(cors_1["default"]()),
    "this": .app.express.use(morgan_1["default"]("dev")),
    "this": .app.express.use(helmet_1["default"]())
};
constructor();
{
    this.app = new graphql_yoga_1.GraphQLServer({});
    this.middewares();
}
exports["default"] = new App().app;
