interface Entity {
  id: number;
}

class Todo implements Entity {
  id: number;
  title: string;
  completed: boolean;
}

class User implements Entity {
  id: number;
  username: string;
}

class Test {
  test: string;
}

// possible car le check se fait à la compilation (TS)
function checkEntity(obj: Entity) {

  // pas possible car pas d'interface au runtime (JS)
  // if (obj instanceof Entity) {
    console.log(obj.id);
  // }
}


const user = new User();
user.id = 1;
user.username = 'Romain';

const todo = new Todo()
todo.id = 2;
todo.title = 'ABC'
todo.completed = true;

const test = new Test();
test.test = 'test';

checkEntity(user);
checkEntity(todo);
checkEntity({id: 12});
// checkEntity(test);
