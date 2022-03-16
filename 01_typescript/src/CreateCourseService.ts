/**
 * Atributos do Curso
 * name- string
 * duration - number
 * educator - string
 */

/**
 * INTERFACE
 * name: string
 * duration: number - Atributo 'OPCIONAL' definido dentro da interface
 * educator: string - Valor 'DEFAULT' definido dentro da interface
 */

interface Course {
  name: string
  duration: number
  educator? : string
}

class CreateCourseService {

  execute({duration = 8, educator, name}: Course) {
    console.log()
  }
} 

export default new CreateCourseService