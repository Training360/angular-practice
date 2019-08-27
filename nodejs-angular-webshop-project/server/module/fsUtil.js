const fs = require('fs');

module.exports = class FsUtil {

  /**
   * This method reads file content from specified path.
   * @param {string} path path of file
   * @param {string} encoding encoding of read process
   */
  static readFile(path, encoding = 'utf8') {
    return new Promise( (resolve, reject) => {
      fs.readFile(path, encoding, (err, data) => {
        if (err) {
          reject({type: 'Read errror', error: err});
        }
        resolve(data);
      });
    });
  }

  /**
   * This method writes the specified data into the file.
   * @param {string} path the path of file
   * @param {any} data the content of file
   * @param {string} encoding encoding of writing process
   */
  static writeFile(path, data, encoding = 'utf8') {
    return new Promise( (resolve, reject) => {
      fs.writeFile(path, data, encoding, (err) => {
        if (err) {
          reject({type: 'Write errror', error: err});
        }
        resolve();
      });
    });
  }
;}
