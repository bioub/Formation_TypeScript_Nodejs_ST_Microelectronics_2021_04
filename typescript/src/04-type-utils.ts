interface Entity {
  id: number;
}

interface ContactInterface extends Entity {
  name: string;
  birthdate: Date;
}

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
