import { Response, Request, NextFunction } from 'express';

export interface IPO_Header {
    id: Number;
    company: string;
    po_num: string;
    vendor_name: string;
    po_date: string;
    placed_by: string;
    ship_date: string;
    ship_via: string;
    email: string;
}

export interface IConfig {
    user: string,
    password: string,
    server: any,
    database: string,
    options: {
        encrypt: boolean,
        trustServerCertificate: boolean
    }
}

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

export interface IRoutes {
    path: string;
    method: Methods;
    handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
    localMiddleware: ((req: Request, res: Response, next: NextFunction) => void)[]
}