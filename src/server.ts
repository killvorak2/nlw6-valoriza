import "reflect-metadata";
import express from "express";

//importando as rotas do arquivo ROUTES.TS
import { router } from "./routes";

import "./database";

const app = express();

//para que o middleware(através do express), possa trabalhar com json
app.use(express.json());

// Tornando agora uma middleware
app.use(router);

// Escuta do Servidor na porta definida
app.listen(3000, () => console.log("Server is running"));


