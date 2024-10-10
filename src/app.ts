import express from "express";
import routes from "./routes";
import "reflect-metadata";
import { appDataSource } from "./config/dataSource";


const app = express();
app.use(express.json());
routes(app);

appDataSource.initialize().then(() => {
  console.log('banco de dados conectado');
}).catch(erro => { console.log(erro) })

export default app;
