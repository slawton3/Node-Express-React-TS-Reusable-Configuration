const sql = require('mssql')
import dotenv from 'dotenv'
import { IConfig } from './app/types/interfaces'

dotenv.config();

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


export async function executeQuery(query) {
    try{
        let pool: any = await sql.connect(config);
        let result: any = await pool.request().query(query);
        return result;
    }
    catch(e){
        console.log(e)
    }
}