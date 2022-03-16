import { Category } from "../model/Category"

// QUANDO O REPOSITÓRIO FOI INICIADO O `CATEGORIES` SERÁ INICIADO TAMBÉM

interface ICreateCategoryDTO{
  name: string,
  description: string
}

class CategoriesRepository {
  private categories: Category []

  constructor(){
    this.categories = []
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

  list(): Category[]{
    return this.categories
  }
}

export {CategoriesRepository}