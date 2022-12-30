enum BadState {
  InProgress,
  Success,
  Fail
}

const badStateCheck = (state: BadState) => { }
badStateCheck(100)

type GoodState = 'InProgress' | 'Success' | 'Fail'

const goodCheckState = (state: GoodState) => { }
goodCheckState('Success');


export default {}