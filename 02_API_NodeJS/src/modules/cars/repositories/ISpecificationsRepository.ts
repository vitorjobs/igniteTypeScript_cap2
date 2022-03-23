import { Category } from "../model/Category"

// QUANDO O REPOSITÓRIO FOI INICIADO O `CATEGORIES` SERÁ INICIADO TAMBÉM

interface ICreateCategoryDTO{
  name: string,
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({name, description}: ICreateCategoryDTO): void
}

export {ICategoriesRepository, ICreateCategoryDTO}