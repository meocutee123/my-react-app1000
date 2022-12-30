type Species = 'cat' | 'dog'

interface Pet {
  species: Species
}

class Cat implements Pet {
  public species: Species = 'cat';

  public meow(): void {
    console.log('Meow')
  }

  public jump(): void {
    console.log('Jumping...')
  }

  public walk(): void {
    console.log("Walking...")
  }
}

function petIsCat(pet: Pet): pet is Cat {
  return pet.species === 'cat';
}

function petIsCatBoolean(pet: Pet): boolean {
  return pet.species === 'cat'
}

const p: Pet = new Cat();

// p.meow() //ERROR

// if(petIsCat(p)) p.meow() //GOOD
export default {}