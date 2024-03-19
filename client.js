//IMPORT CLIENT AND ENVIROMENT VARIABLES
import pg from 'pg';
import dotenv from 'dotenv'

const {Client} = pg;
dotenv.config();

//Creating client using node-postgres
export const client = new Client({
    host:"localhost",
    user:process.env.POSTGRES_USERNAME,
    port:process.env.POSTGRES_PORT,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DATABASE
})


