import express, { response }  from "express"

const app = express()

app.get("/", (request, response) =>{ 
  return response.json({
    messagem: "Bem Vindo - Projeto TypeScript - TS-NODE-JS configurado no Script"
  })

})

app.listen(3000, () =>{
    console.log("Server On In PORT 3000");
    
})