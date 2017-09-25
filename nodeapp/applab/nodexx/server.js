'use strict'
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
        // console.log(chunk.toString());
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);

        res.on('error', (err) => {
            console.error(err);
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // Note: the 2 lines above could be replaced with this next one:
        // response.writeHead(200, {'Content-Type': 'application/json'})

        const responseBody = {headers, method, url, body};
        res.write(JSON.stringify(responseBody));
        res.end();
    });
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});