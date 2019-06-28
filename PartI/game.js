const fs = require("fs");

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
  let timeArray = [
    5000,
    10000,
    50000,
    100000,
    500000,
    750000,
    1000000,
    1500000,
    2000000,
    5000000,
    7000000,
    1000000000,
    5000000000
  ];
  const resultsMap = timeArray.map(sizeOfRange => ({
    sizeOfRange,
    binaryTime: checkBinaryTime(sizeOfRange),
    sizeOfRange,
    linearTime: checkLinearTime(sizeOfRange)
  }));
  return resultsMap;
}

console.log(linearSearch(targetNumber, 999));
console.log(binarySearch(randomNumber(1000) + 1, 1000));
console.log(timeValues());

const resultsReturned = timeValues().map(
  row => `${row.sizeOfRange},${row.binaryTime},${row.linearTime} \n`
);

console.log(resultsReturned);

fs.writeFileSync("./searchResults.csv", resultsReturned.join(""));
