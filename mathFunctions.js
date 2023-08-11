//realization with recursion
function factorial(num) {
  if(num < 0) {
    return -1;
  }
  if (num < 2) {
    return 1;
  }
  return num * factorial(num - 1);
}
//realization with loop
function factorialLoop(num) {
  if(num < 0) {
    return - 1;
  }
  let result = 1;
  while(num < 2) {
    result *= num;
  }
  return result;
}

function arifmeticAverage(...args) {
  return args.reduce((accumulator, currentValue) => accumulator += currentValue) / args.length
}

function geometricAverage(...args) {
  return args.reduce((accumulator = 1, currentValue) => accumulator *= currentValue) ** (1 / args.length)
}
