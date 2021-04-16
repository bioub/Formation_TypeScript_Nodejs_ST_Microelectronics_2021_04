import net from 'net';

const socket = net.connect(4000, 'localhost');

// socket est un duplex stream
socket.pipe(process.stdout); // affiche dans le terminal la réponse du server

// Envoie d'une requete HTTP
socket.write('abc');
// eventuellement le body de la requete
socket.end();
