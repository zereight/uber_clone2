import dotenv from "dotenv";
dotenv.config();

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import  app from "./app";
import connectionOptions from "./ormConfig";

const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";


const appOptions : Options = {
    port : PORT,
    subscriptions: '/subscriptions',
    playground : PLAYGROUND_ENDPOINT, 
    // yarn dev 한다음,
    // c9 에서 Run 실행하고
    // https://asdsdasd-rlaeogus890.c9users.io/playground 로 접속하면 
    // graphql playground 볼수 있다.!
    endpoint : GRAPHQL_ENDPOINT
};

const handleAppStart = ():void => {
    console.log(`Listening on port ${PORT}`);
};

createConnection( connectionOptions ).then(  () => {    
    // typeorm 을 통하여 DB에 연결한후 app 실행
    app.start(appOptions, handleAppStart);
    })
    .catch( error => {console.log(error)} );