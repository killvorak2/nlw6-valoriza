import express from "express";

const app = express();

/* 
Inicio => Teste na construção de métodos
*/

//Método de GET
app.get("/test", (request, response) => {
  return response.send("Olá")
})

//Método de POST
app.post("/test-post", (request, response) => {
  return response.send("Olá usando o método de POST")
})

/* 
Final => Teste na construção de métodos
*/

// Escuta do Servidor na porta definida
app.listen(3000, () => console.log("Server is running"));


