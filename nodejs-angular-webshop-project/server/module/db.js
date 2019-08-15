// Betöltjük a path modult az elérési utak kezeléséhez.
const path = require('path');

// A modul egy osztállyal tér vissza, ami az adatbázis fájlokat kezeli.
module.exports = class DB {

  // A konstruktor megkapja az adott json fájl nevét.
  constructor(jsonFileName) {
    // Beállítjuk a json fájlokat tartalmazó mappa elérési útját.
    this.jsonDirectory = path.join('./../../json');

    // Beállítjuk a kezelendő json fájl teljes elérési útját.
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`
    );

    console.log(this.jsonFilePath);
  }
};
