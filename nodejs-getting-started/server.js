// Loading required modules.
const http = require('http');
const fs = require('fs');
const port = 3210;

class PostHandler {
    constructor(req, res) {
        // Ide gyűjtjük az adatcsomagokat.
        this.allData = '';

        // Ez a függvény fut le, ha megérkezik egy adatcsomag.
        req.on('data', (chunk) => {
            this.allData += chunk;
        });

        // Megjött az összes adat.
        req.on('end', () => {
            console.log( this.allData );
            res.end('Köszi.');
        });
    }
}

class GetHandler {
    constructor(req, res) {
        let fileName = req.url == '/' ? 'index.html' : `${req.url}.html`;
        let filePath = `./view${fileName}`;

        console.time('filereadtime');
        console.time('testtime');
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                console.error(err);
                return res.end('404');
            }
            console.timeEnd('filereadtime');
            res.end(fileContent);
        });

        console.timeEnd('testtime');
    }
}



// Init server.
const server = http.createServer( (req, res) => {

    switch( req.method.toLowerCase() ) {
        // get|post|put|delete
        case 'get': new GetHandler(req, res);
        break;
        case 'post': new PostHandler(req, res);
        break;
        default:
            res.end('Hello');
    }
});

// Set server port.
server.listen(port, () => {
    console.log( `Server is listening in ${port} port.`);
});