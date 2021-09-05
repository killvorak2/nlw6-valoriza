import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// Criando a interface com os dados a serem usados para usuários
interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean;
}
//Todas as regras para criação de usuários
class CreateUserService {
  async execute({name, email, admin}: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    
    //verifica se esta sem email
    if (!email) {
      throw new Error("Email incorrect");
    }

    //verifica se esse email já existe no cadastro
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    //Se o email já estiver cadastrado para alguem, ele devolve o erro com o nome de usuario 
    if (userAlreadyExists) {
      throw new Error(`User ${name} already exists`);
    }

    // criando instancia do usuario para salvar
    const user = usersRepository.create({
      name,
      email,
      admin
    })

    //recebe o objeto user para salvar
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService};