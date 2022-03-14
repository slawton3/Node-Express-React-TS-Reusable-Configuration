import Controller from "./controller";
import { Request, Response, NextFunction } from "express";
import { Methods } from "../types/interfaces";

export default class DataRoutes extends Controller {
    path = "/";
    routes = [
        {
            path: '/locations',
            method: Methods.GET,
            handler: this.handleGetLocations,
            localMiddleware: [],
        },
        {
            path: '/locations/:id',
            method: Methods.GET,
            handler: this.handleGetLocations,
            localMiddleware: [],
        },
        {
            path: '/header/:id',
            method: Methods.GET,
            handler: this.handleGetHeader,
            localMiddleware: [],
        },
        {
            path: '/lines/:id',
            method: Methods.GET,
            handler: this.handleGetLines,
            localMiddleware: [],
        },
        {
            path: '/header/search/:id',
            method: Methods.GET,
            handler: this.handleGetSearch,
            localMiddleware: [],
        },
        {
            path: '/name',
            method: Methods.GET,
            handler: this.handleGetName,
            localMiddleware: [],
        },
        {
            path: '/branch',
            method: Methods.GET,
            handler: this.handleGetBranch,
            localMiddleware: [],
        },
        
    ]

    constructor(){
        super();
    }

    async handleGetLocations (req: Request, res: Response, next: NextFunction, id?: number) {
        try{
            
        }
        catch(err){
            console.log(err);
        }
    } 
    async handleGetHeader (req: Request, res: Response, next: NextFunction, id?: number) {
        try{

        }
        catch(err){
            console.log(err);
        }
    }
    async handleGetLines (req: Request, res: Response, next: NextFunction, id?: number) {
        try{

        }
        catch(err){
            console.log(err);
        }
    }
    async handleGetName (req: Request, res: Response, next: NextFunction, id?: number) {
        try{

        }
        catch(err){
            console.log(err);
        }
    }
    async handleGetBranch (req: Request, res: Response, next: NextFunction, id?: number) {
        try{

        }
        catch(err){
            console.log(err);
        }
    }
    async handleGetSearch (req: Request, res: Response, next: NextFunction, id?: number) {
        try{

        }
        catch(err){
            console.log(err);
        }
    }
}