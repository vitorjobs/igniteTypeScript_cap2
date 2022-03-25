import express from "express"
import { router } from "./routes"
import swaggerUI from "swagger-ui-express"
import swaggerFile from "./swagger.json"

const app = express()
 app.use(express.json())

 app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.get("/", (request, response) =>{ 
  return response.json({
    messagem: "Bem Vindo - Projeto TypeScript - TS-NODE-JS configurado no Script"
  })

})

app.use(router)

app.listen(3000, () =>{
  console.log("Server On In PORT 3000 !!");

})