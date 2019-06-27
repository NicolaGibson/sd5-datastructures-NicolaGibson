function getNanoTime() {
  let nanotime = process.hrtime();
  return nanotime[0] * 1000000000 + nanotime[1];
}

function checkBinaryTime(sizeOfRange, timeValues) {
  let startTime = getNanoTime();
  let targetNumber = randomNumber(1000);
  binarySearch(targetNumber, sizeOfRange);
  const endTime = getNanoTime();
  const overallTime = endTime - startTime;
  return overallTime;
}

function checkLinearTime(sizeOfRange, timeValues) {
  let startTime = getNanoTime();
  let targetNumber = randomNumber(1000);
  linearSearch(targetNumber, sizeOfRange);
  const endTime = getNanoTime();
  const overallTime = endTime - startTime;
  return overallTime;
}

function randomNumber(x) {
  let number = Math.floor(Math.random() * x);
  return number;
}

function linearSearch(targetNumber, n) {
  for (let i = 1; i <= n; i++) {
    if (i === targetNumber) {
      return "The random number is " + i + "!";
    }
  }
}

function binarySearch(secretNumber, max) {
  let mid,
    low = 1,
    high = max;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (mid === secretNumber) {
      return "The random number is " + mid + "!";
    } else if (mid < secretNumber) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Your target value cannot be found";
}

let targetNumber = randomNumber(1000);

function timeValues() {
  let timeArray = [1000, 5000, 10000, 50000, 100000, 500000, 1000000];
  const binaryMap = timeArray.map(time => checkBinaryTime(time));
  const linearMap = timeArray.map(time => checkLinearTime(time));
}

console.log(linearSearch(targetNumber, 999));
console.log(binarySearch(randomNumber(1000) + 1, 1000));
/*console.log(checkBinaryTime(1000));
console.log(checkBinaryTime(50000));
console.log(checkBinaryTime(10000));
console.log(checkLinearTime(1000));
console.log(checkLinearTime(50000));
console.log(checkLinearTime(10000)); */

console.log(checkLinearTime(timeValues));
console.log(checkBinaryTime(timeValues));
