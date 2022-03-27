//Arquivo principal
//executado primeiro
//informações de serviço de transições http

const http = require('http'); //importação do http
const app = require('./app');//importando app
const port = process.env.PORT || 3000; //lendo/pegando porta
const server = http.createServer(app); //criando o servidor, passando app e ouvindo ele
server.listen(port); //colocando o servidor para escutar o serviço da porta port


