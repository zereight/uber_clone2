"use strict";
exports.__esModule = true;
var cors = require("cors");
var graphql_yoga_1 = require("graphql-yoga");
var helmet = require("helmet");
var logger = require("morgan");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.middlewares = function () {
            _this.app.express.use(cors());
            _this.app.express.use(logger("dev"));
            _this.app.express.use(helmet());
        };
        this.app = new graphql_yoga_1.GraphQLServer({});
        this.middlewares();
    }
    return App;
}());
exports["default"] = new App().app;
