import net from 'net';
import { Transform } from 'stream';

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

const server = net.createServer((socket) => {
  // un client s'est connecté
  // pipe écoute un event data
  socket.pipe(new UpperCase()).pipe(socket);

  // socket.on('data', (buffer) => {
  //   const str = buffer.toString('utf-8').toUpperCase();
  //   socket.write(str);
  // });

  socket.on('close', () => {
    // le client se déconnecte
  });
});

// un client se connecte
// server.on('connection', () => {

// });

server.on('error', (err) => {
  console.log(err);
});


server.listen(4000, () => {
  console.log('server started');
});
