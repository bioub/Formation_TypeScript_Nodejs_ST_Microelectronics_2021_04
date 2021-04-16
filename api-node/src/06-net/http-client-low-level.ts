import net from 'net';

const socket = net.connect(80, 'example.org');

// socket est un duplex stream
socket.pipe(process.stdout); // affiche dans le terminal la réponse du server

// Envoie d'une requete HTTP
socket.write('GET / HTTP/1.1\r\n');
socket.write('Host: example.org\r\n');
socket.write('User-agent: Node.js bot\r\n');
socket.write('\r\n');
// eventuellement le body de la requete
socket.end();
