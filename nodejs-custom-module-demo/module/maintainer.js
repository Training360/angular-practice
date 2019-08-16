// Load necessary modules.
const fs = require('fs');
const path = require('path');

// Maintainer class.
class Maintainer {
    constructor(dir = '', reg = new RegExp()) {
        this.dir = dir;
        this.reg = reg;
    }

    flush() {
        let dirPath = path.join('./', this.dir);
        let fileList = fs.readdirSync(dirPath);
        for (let file of fileList) {
            file = path.join(dirPath, file);
            if (this.reg.test(file)) {
                fs.unlinkSync(file);
            }
        }
    }
}

module.exports = Maintainer;