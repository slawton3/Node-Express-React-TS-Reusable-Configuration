import { Express, Request, Response, RequestHandler  } from 'express';
import express from "express";
import * as path from "path";
import { executeQuery } from '../dbConnect';
import { IPO_Header } from './types/interfaces';
import Controller from './routes/controller'
const sql = require('mssql')
import dotenv from 'dotenv'
import { IConfig } from './types/interfaces'

dotenv.config();


export class Server {

    private app: Express;
    private readonly port: number;
    private config: IConfig;

    constructor(app: Express, port: number, config: IConfig){
        this.app = app;
        this.port = port
        this.config = config;

        this.app.use(express.static(path.resolve("./") + "/build/client"));

        this.app.get("/api", (req: Request, res: Response): void => {
            try{
                let query = "SELECT * FROM WBT_PO_Header";
                const result = executeQuery(query);
                result.then((q: IPO_Header) => res.send(q));
            }
            catch(e){
                console.log(e);
            }
        });

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/client/index.html");
        });


    }

    public loadGlobalMiddleware(middleware: Array<RequestHandler>): void {
        //for globals like cors, body parsers, etc
        middleware.forEach(mw => {
            this.app.use(mw);
        })
    }

    public loadControllers(controllers: Array<Controller>): void {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.setRoutes());
        });
    };

    public async initDatabase(): Promise<void> {
        try{
            const pool = await sql.connect(this.config);
            console.log(`Successful database connection pool: ${pool}`);
        }
        catch(err){
            console.log(err);
        }
    }

    public start(): void {
        this.app.listen(this.port, () => console.log(`Server listening on port ${this.port}`));
    };

}