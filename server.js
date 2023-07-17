const http = require("http")

const port = 3000;

const rotas = {
    '/':'Home Page',
    '/livros': "Entrei na pagina de livros",
    '/autores':'Listagem de autores',
    '/editora':'pag de editora',
    '/sobre':"informacao sobre o projeto"
}
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end(rotas[req.url])
})
server.listen(port,()=>{
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})