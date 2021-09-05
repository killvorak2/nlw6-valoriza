import "reflect-metadata";
import express from "express";

//importando as rotas do arquivo ROUTES.TS
import { router } from "./routes";

import "./database";

const app = express();

// Tornando agora uma middleware
app.use(router);

// Escuta do Servidor na porta definida
app.listen(3000, () => console.log("Server is running"));


