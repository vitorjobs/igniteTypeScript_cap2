import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specification[]

  constructor(){
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  // VALIDAR SE JÁ EXISTE O NOME ANTES DE EFETIVAR O CADASTRO
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
      )
    return specification
  }
}

export {SpecificationsRepository}