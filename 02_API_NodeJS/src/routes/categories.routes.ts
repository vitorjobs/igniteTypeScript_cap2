import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/implimentations/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

import multer from "multer"
import { importCategoryController } from '../modules/cars/useCases/ImportCategory'

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp"

})

const categoriesRepository = CategoriesRepository.getInstance()

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>{
  return importCategoryController.handle(request, response)
})

export {categoriesRoutes} 