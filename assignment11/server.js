const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const filePath = './myFile.pdf';
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
