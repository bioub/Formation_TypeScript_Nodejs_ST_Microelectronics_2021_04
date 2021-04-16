import fs from 'fs';
import { Transform } from 'stream';
import { createGzip } from 'zlib';
import path from 'path';

// On peut aussi utiliser fs dans un style C
// const fd = fs.open('', 'a');
// fs.write(fd);
// fs.close(fd);

const prettierRcPath = path.resolve(__dirname, '..', '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '..', '.prettierrc.zip');
const readStream = fs.createReadStream(prettierRcPath);
const writeStream = fs.createWriteStream(prettierRcCopyPath);

// cat .prettierrc | grep all
readStream.pipe(process.stdout);

// cat .prettierrc > .prettierrc.copy
// readStream.pipe(writeStream);

// 4 type de stream
// - readStream (méthode read)
// - writeStream (méthode write)
// - duplex stream (read + write)
// - transform (duplex + une transformation)

// cat .prettierrc | gzip  > .prettierrc.copy
readStream.pipe(createGzip()).pipe(writeStream);

class UpperCase extends Transform {
  _transform(
    data: Buffer,
    encoding: string,
    callback: (err: Error, data: string) => void,
  ) {
    const result = data.toString('utf-8').toUpperCase();
    callback(null, result);
  }
  _flush(callback: () => void) {
    callback();
  }
}

fs.createReadStream(prettierRcPath, { encoding: 'utf-8' })
  .pipe(new UpperCase())
  .pipe(process.stdout);
