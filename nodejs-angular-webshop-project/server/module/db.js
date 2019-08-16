// Betöltjük a path modult az elérési utak kezeléséhez.
const path = require('path');
const fs = require('fs');

// A modul egy osztállyal tér vissza, ami az adatbázis fájlokat kezeli.
module.exports = class DB {

  // A konstruktor megkapja az adott json fájl nevét.
  constructor(jsonFileName) {
    // Beállítjuk a json fájlokat tartalmazó mappa elérési útját.
    this.jsonDirectory = path.join('./../json');

    // Beállítjuk a kezelendő json fájl teljes elérési útját.
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`
    );

    console.log(this.jsonFilePath);
  }

  find(id = 0) {
    return new Promise( (resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then(
          dataArray => resolve(dataArray),
          err => reject(err)
        );
      }else {
        this.getJsonArray().then(
          dataArray => {
            let found = dataArray.filter( item => item.id == id)[0] || {};
            resolve(found);
          }
        )
      }
    });
  }

  getJsonArray() {
    return new Promise( (resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }

        resolve( JSON.parse(jsonString) );
      });
    });
  }

};
