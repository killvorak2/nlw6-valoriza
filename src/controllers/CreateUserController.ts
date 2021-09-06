import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController{

  //recebendo os dados através do Body
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin, password });
    
    //retornando um json com as informações acima, dentro do objeto user
    return response.json(user);
  }
}

export { CreateUserController }
