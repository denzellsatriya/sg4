import http from 'http';

let message = 'Belum ada pesan'; 

const server = http.createServer((req, res) => {
    // GET
    if (req.method === 'GET' && req.url === '/message') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end(message);
    } 

    // POST
    else if (req.method === 'POST' && req.url === '/message') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            message = body;
            res.writeHead(201, { 'Content-Type' : 'text/plain' });
            res.end('Pesan berhasil disimpan');
        });
    } 

    // PUT
    else if (req.method === 'PUT' && req.url === '/message') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            message = body;
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('Pesan berhasil diperbarui');
        });
    }
    
    // HOME
    else if (req.method === 'GET' && req.url === '/') { 
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        res.end('Ini adalah halaman home');
    } 
    // ERROR
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint tidak ditemukan');
    }
});

server.listen(3000, () => {
    console.log('Server berjalan di http://127.0.0.1:3000');
});