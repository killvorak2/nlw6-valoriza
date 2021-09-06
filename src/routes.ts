import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const creatUserController = new CreateUserController();
const creatTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

// passando os dados de request e response através do objeto CreateUserController e o seu Handle 
router.post("/users", creatUserController.handle);
  
// passando os dados de request e response através do objeto CreateTagController e o seu Handle 
router.post("/tags", ensureAdmin, creatTagController.handle);

// passando dados de request e response através do objeto AuthenticateUserController e o seu Handle 
router.post("/login", authenticateUserController.handle);
export { router }