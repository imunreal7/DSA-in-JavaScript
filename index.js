const startTime = performance.now();

var myFunction = function () {};

console.log(myFunction());

const endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

