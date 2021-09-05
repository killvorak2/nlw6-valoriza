import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

class CreateTagController{

  //recebendo os dados através do Body
  async handle(request: Request, response: Response) {
    const { name} = request.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute({ name });
    
    //retornando um json com as informações acima, dentro do objeto tag
    return response.json(tag);
  }
}

export { CreateTagController }
