const http = require('http');

const PORT = 80;
const MESSAGE = 'Hola, mundo!!!';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(MESSAGE);
});

server.listen(PORT, () => {
    console.log(`Servidor HTTP en ejecución en el puerto ${PORT}`);
});
