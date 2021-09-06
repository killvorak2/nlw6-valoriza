import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories} from "../repositories/UsersRepositories"


interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{

  async execute({ email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)
   
    //Verifica se o email já existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    //verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // gerando token
    const token = sign({
      email: user.email,
    }, "e7ba90a77dcbf68905eeaaf6eb2526c1", {
      subject: "user.id",
      expiresIn: "1d"
    })

    return token;
  }
}

export {AuthenticateUserService}