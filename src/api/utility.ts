//PARTIAL
interface IAccount {
  accountId: number,
  isAdministrator: boolean,
  updatedDate?: Date | null
}

const makeAdministrator = (account: IAccount, fieldsToUpdate: Partial<Omit<IAccount, 'accountId'>>) => ({ ...account, ...fieldsToUpdate })

const john: IAccount = {
  accountId: 1,
  isAdministrator: false
}

const administrator = makeAdministrator(john, { isAdministrator: true })
console.log(administrator)

//REQUIRED oposite of partial
const makeAdministratorRequired = (account: IAccount, fieldsToUpdate: Required<Omit<IAccount, 'accountId'>>) => ({ ...account, ...fieldsToUpdate })
const will: IAccount = {
  accountId: 2,
  isAdministrator: false,
  updatedDate: null
}
const director = makeAdministratorRequired(will, { isAdministrator: true, updatedDate: new Date() })
console.log(director)

//READONLY
const jack: Readonly<IAccount> = {
  accountId: 4,
  isAdministrator: true
}

// jack.isAdministrator = false; //ERROR jack is readonly

//RECORD Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
type Breed = 'Persian' | 'Maine Coon' | 'British Shorthair'
interface Cat {
  age: number,
  breed: Breed
}

type Name = 'lili' | 'lucas' | 'leo'
const cats: Record<Name, Cat> = {
  lili: { age: 10, breed: 'Persian' },
  lucas: { age: 6, breed: 'Maine Coon' },
  leo: { age: 8, breed: 'British Shorthair' }
}

type Properties = 'red' | 'green' | 'blue'
type RGB = [red: number, green: number, blue: number]
const colour: Record<Properties, RGB | string> = {
  red: [255, 0, 0],
  blue: 'blue',
  green: 'green'
}


//PICK
const accountRequired: Pick<IAccount, 'accountId' | 'isAdministrator'> = {
  accountId: 5,
  isAdministrator: false
}
console.log(accountRequired)

//OMIT
const accountShortened: Omit<IAccount, 'isAdministrator'> = {
  accountId: 6
}
console.log(accountShortened)

//EXCLUDE
type Charactors = 'a' | 'b' | 'c' | 'd' | 'e'
const notLearnCharacters: Exclude<Charactors, 'b'> = 'a' //a, c, d because b is learned

//EXTRACT
const learnedCharacter: Extract<Charactors, 'd' | 'e' | 'f' | 'g'> = 'd' //d, e are learned and f, g not in the Characters type

export default {}