import { EventEmitter } from 'events';

interface User {
  username: string;
  password: string;
}

class UserService extends EventEmitter {
  register(user: User) {
    // TODO write in database

    // transformer le emit en async
    // 3 méthodes
    // setTimeout (en début d'event loop, tour complet de l'event loop)
    // setImmediate (en fin d'event loop)
    // process.nextTick (boucle interne à la file de message courante)
    process.nextTick(() => {
      this.emit('user.creation', user);
    });

    // db.insert(user, () => {
    this.emit('user.created', user);
    //})
  }
}

// application A
const userServiceA = new UserService();
userServiceA.on('user.created', (user: User) => {
  console.log('SENDING SMS TO ' + user.username);
});

// application B
const userServiceB = new UserService();
userServiceB.on('user.created', (user: User) => {
  console.log('SENDING MAIL TO ' + user.username);
});

userServiceA.register({
  username: 'toto',
  password: '1234',
});

userServiceB.register({
  username: 'titi',
  password: '1234',
});


