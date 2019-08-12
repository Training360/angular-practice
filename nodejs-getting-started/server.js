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
        if (req.url === '/') {
            fs.readFile('./view/index.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return res.end('404');
                }
                res.end(data);
            });
        } else {
            let filePath = `./view${req.url}.html`;
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return res.end('404');
                }
                res.end(data);
            });
        }
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