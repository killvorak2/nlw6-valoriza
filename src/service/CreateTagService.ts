import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

// Criando a interface com os dados a serem usados para Tags
interface ITagRequest{
  name: string;
}
//Todas as regras para criação de tags
class CreateTagService {
  async execute({name}: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories);
    
    //verifica se esta sem tag
    if (!name) {
      throw new Error("Name incorrect");
    }

    //verifica se essa tag já existe no cadastro
    const tagAlreadyExists = await tagsRepository.findOne({
      name
    })

    //Se a tag já estiver cadastrado, ele devolve o erro com o nome da tag
    if (tagAlreadyExists) {
      throw new Error(`Tag ${name} already exists`);
    }

    // criando instancia do tag para salvar
    const tag = tagsRepository.create({
      name
    })

    //recebe o objeto tag para salvar
    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService};