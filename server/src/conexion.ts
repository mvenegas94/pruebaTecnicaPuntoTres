import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    database: 'baseDatos',
    port: 5432
});