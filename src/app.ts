import cors from "cors";
import {GraphQLServer} from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";

class App{
    public app : GraphQLServer;
    
    private middewares = ():void = > {
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
    }
    
    constructor() {
        this.app = new GraphQLServer({});
        this.middewares();
    }
}

export default new App().app;