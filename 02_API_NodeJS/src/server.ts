import express, { response }  from "express"
import { categoriesRoutes } from "./routes/categories.routes"

const app = express()
 app.use(express.json())

app.get("/", (request, response) =>{ 
  return response.json({
    messagem: "Bem Vindo - Projeto TypeScript - TS-NODE-JS configurado no Script"
  })

})

app.post("/courses", (request, response) =>{ 

  const {name} = request.body
  return response.json({ 
    message: "Usuário Cadastrado:", name
  }) 
})

app.use(categoriesRoutes, )

app.listen(3000, () =>{
  console.log("Server On In PORT 3000 !!");

})