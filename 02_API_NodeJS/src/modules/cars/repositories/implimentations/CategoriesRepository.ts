import { Category } from "../../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"


class CategoriesRepository  implements ICategoriesRepository{
  private categories: Category[]

  private static INSTANCE: CategoriesRepository 

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository{
    
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository()
      
    }
    return CategoriesRepository.INSTANCE
  }

  // CADASTRO UMA CATEGORIA
  create({name, description}: ICreateCategoryDTO): void {
    const category = new Category ()

    Object.assign(category, {
      name, 
			description,
			created_at: new Date(),
    })
	
		this.categories.push(category)
  }

  // LISTAR TODAS AS CATEGORIAS
  list(): Category[]{
    return this.categories
  }

  //BUSCAR CATEGORIAS POR NOME PARA VALIDAR NO ENDPOINT DE CRIAÇÃO DE CATEGORIAS
  findByName(name: string): Category{
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export {CategoriesRepository}