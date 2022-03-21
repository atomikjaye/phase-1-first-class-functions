function receivesAFunction(callback) {
  return callback()
}

const returnsANamedFunction = () => {
  return function namedFunction() {
    return 'Hello'
  }
}
const returnsAnAnonymousFunction = () => {
  return function () {
    return 'I am anon'
  }
}