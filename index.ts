import { Server } from "./app/server";
import express, { RequestHandler } from "express";
import { IConfig } from "./app/types/interfaces";
import Controller from "./app/routes/controller";

const config: IConfig = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_SERVER, // You can use 'localhost\\instance' to connect to named instance
    database: process.env.DATABASE_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const controllers: Array<Controller> = [
    //add route controllers here
]

const globalMiddleware: Array<RequestHandler> = [
    //insert middleware here
]



const app = express();
const port = 5000;

const server = new Server(app, port, config);

Promise.resolve()
    .then(() => server.initDatabase())
    .then(() => {
        server.loadGlobalMiddleware(globalMiddleware);
        server.loadControllers(controllers);
        server.start();
    })