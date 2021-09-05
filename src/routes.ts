import { Router } from express;
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const creatUserController = new CreateUserController();

  // passando os dados de request e response através do objeto CreateUserController e o seu Handle 
  router.post("/users", creatUserController.handle);

export { router }