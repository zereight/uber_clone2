import { ConnectionOptions } from "typeorm";

const connectionOptions : ConnectionOptions = {
    
    type: "postgres",
    database: "nuber",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    //host: process.env.DB_ENDPOINT || "localhost",
    host: process.env.DB_ENDPOINT || "https://asdsdasd-rlaeogus890.c9users.io/",
    port: 5432,
    username: process.env.DB_USERNAME || "zereight",
    password : process.env.DB_PASSWORD || ""
};

export default connectionOptions;