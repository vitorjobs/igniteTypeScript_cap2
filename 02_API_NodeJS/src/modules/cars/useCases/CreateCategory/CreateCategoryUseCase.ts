import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
  name: string
  description: string
}


/**
 * DEFINIR O TIPO DE RETORNO [x] - utilização do throw
 * ALTERAR O TIPO DE ERROR [x]
 * ACESSAR O REPOSITÓRIO [x]
 * RETORNAR ALGO [x]
 */

// SERVIÇO DE CRIAÇÃO DE CATEGORIAS
class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepository){

  }
  
  // CRIAR CATEGORY
  execute({name, description}: IRequest){

    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!")
    }
    this.categoriesRepository.create({name, description})
  }
}

export {CreateCategoryUseCase}