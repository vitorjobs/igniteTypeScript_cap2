import { Category } from "../model/Category"

// QUANDO O REPOSITÓRIO FOI INICIADO O `SPECIFICATIONS` SERÁ INICIADO TAMBÉM

interface ICreateSpecificationDTO{
  name: string,
  description: string
}

interface ISpecificationsRepository {
  create({name, description}: ICreateSpecificationDTO): void
}

export {ISpecificationsRepository, ICreateSpecificationDTO}