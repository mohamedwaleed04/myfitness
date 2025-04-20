import express from 'express';
import dotenv from 'dotenv';

const app = express();
import connection from "./db/connection.js"
import { appRouter } from './app.router.js';

dotenv.config();
const port = process.env.PORT;

connection();
appRouter(app, express);

 app.listen(port , ()=>{
  console.log("app is running...")
});