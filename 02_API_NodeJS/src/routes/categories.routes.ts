import {Router} from 'express'
import {CategoriesRepository} from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'
import {CreateCategoryUseCase} from '../modules/cars/useCases/CreateCategory/CreateCategoryUseCase'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
//const categoriesRepository = new PostgresCategoriesRepository

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})

export {categoriesRoutes} 