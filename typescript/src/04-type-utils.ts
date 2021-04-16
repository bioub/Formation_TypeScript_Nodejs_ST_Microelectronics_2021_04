interface Entity {
  id: number;
}

interface ContactInterface extends Entity {
  name: string;
  birthdate: Date;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
type ContactWithoutId = Omit<ContactInterface, 'id'>;

class Contact implements ContactWithoutId {
  name = '';
  birthdate: Date;
  email: string;

  constructor() {

  }

  hello() {

  }
}

function insertContact(contact: ContactWithoutId) {

}

insertContact({
  name: 'Romain',
  birthdate: new Date(),
});
