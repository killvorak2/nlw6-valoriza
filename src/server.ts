import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
//da capacidade oa express em tratar erros com uso de async
import "express-async-errors"

//importando as rotas do arquivo ROUTES.TS
import { router } from "./routes";

import "./database";

const app = express();

//para que o middleware(através do express), possa trabalhar com json
app.use(express.json());

// Tornando agora uma middleware
app.use(router);

//Cria um controle para interceptar os erros ocorridos
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  //verifica se o erro foi instanciado através da classe Error
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

// Escuta do Servidor na porta definida
app.listen(3000, () => console.log("Server is running"));


