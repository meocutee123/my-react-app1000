let accountAny: any; //this means turn of the Typescript: "type-check"
let accountUnknow: unknown //the right way to use

// accountAny.myThing();
// accountUnknow.myThing(); Error: we cannot access undeclared methods in unknown

interface IAccount {
  id: number,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  age: number
}

interface IAdmin extends IAccount {
  token: string,
  addAccount: () => void
}

function isAdmin(account: unknown): account is IAdmin {
  if (account !== null && typeof account === 'object') {
    return 'token' in account;
  }

  return false
}

function isRegular(account: unknown): account is IAccount {
  if (account !== null && typeof account === 'object') {
    return 'token' in account;
  }

  return false
}

async function fetchAccount() {
  const response = await fetch("https://localhost:5001/account/1")

  //Bad
  // const bad = await response.json(); bad is oftype any
  //bad.myThing()

  //good
  const good: unknown = await response.json()
  if (isAdmin(good)) {
    // good.
  }

  if (isRegular(good)) {
    // good.
  }


}




export { }