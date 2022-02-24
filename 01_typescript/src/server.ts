import express from 'express'

const app = express()

app.get("/", (request, response) =>{
    return response.json({
      mensagem: "Olá Desenvolvedor."
    })
})

app.listen(3000)