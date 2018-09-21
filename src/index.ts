import { Options } from "graphql-yoga";
import  app from "./app";

const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";


const appOptions : Options = {
    port : PORT,
    playground : PLAYGROUND_ENDPOINT, 
    // yarn dev 한다음,
    //c9 에서 Run 실행하고
    //https://asdsdasd-rlaeogus890.c9users.io/playground 로 접속하면 
    //graphql playground 볼수 있다.!
    endpoint : GRAPHQL_ENDPOINT
};

const handleAppStart = ():void => {
    console.log(`Listening on port ${PORT}`);
};




app.start(appOptions, handleAppStart);