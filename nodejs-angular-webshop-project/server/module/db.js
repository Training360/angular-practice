// Betöltjük a path modult az elérési utak kezeléséhez.
const path = require('path');
const fs = require('fs');
const FsUtil = require('./fsUtil');

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

  find(id = 0, query = '') {
    return new Promise( (resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then(
          dataArray => {
            if (query) {
              let queryParams = query.split('=');
              // filter(item => item.product == 1)
              dataArray = dataArray.filter(item => item[queryParams[0]] == queryParams[1]);
            }
            resolve(dataArray);
          },
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

  async create(item) {
    let dataArray = await this.getJsonArray();
    item.id = this.getNextId(dataArray);
    dataArray.push(item);
    await this.write(dataArray);
    return item;
  }

  async getJsonArray() {
    let data = await FsUtil.readFile(this.jsonFilePath);
    return JSON.parse(data);
  }

  getNextId(dataArray) {
    if (!Array.isArray(dataArray)) {
      return 1;
    }

    if (dataArray.length === 0) {
      return 1;
    }

    dataArray.sort( (a, b) => a.id - b.id );
    return dataArray[dataArray.length - 1].id + 1;
  }

  async write(dataArray) {
    let data = JSON.stringify(dataArray, null, 4);
    await FsUtil.writeFile(this.jsonFilePath, data);
  }

};
