import { Specification } from "../model/Specification"

// QUANDO O REPOSITÓRIO FOI INICIADO O `SPECIFICATIONS` SERÁ INICIADO TAMBÉM

interface ICreateSpecificationDTO{
  name: string,
  description: string
}

interface ISpecificationsRepository {
  create({name, description}: ICreateSpecificationDTO): void
  findByName(name: string): Specification
}

export {ISpecificationsRepository, ICreateSpecificationDTO}