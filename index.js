function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    return "Hello World!";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "Hello World!";
  };
}
