const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Asosiy sahifa');
        res.end();
    }
    if(req.url === '/books'){
        res.write(JSON.stringify(["Code Complete", "Clean code", "Result Code"]));
        res.end();
    }
});

server.listen(8000);
console.log(`${server.address().port} portni eshitishni boshladim...`);