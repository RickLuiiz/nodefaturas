const http = require('http');
const porta = 3000


const server = http.createServer((req, res) => {
    console.log('url: ',req.url);
    res.end('inicio do projeto fatura');


});


server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:'+porta);
});
