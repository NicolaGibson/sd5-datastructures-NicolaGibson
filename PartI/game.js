const fs = require("fs");

// Function which converts time to nanotime
function getNanoTime() {
  let nanotime = process.hrtime();
  return nanotime[0] * 1000000000 + nanotime[1];
}

//Linear search function, increments by one moving through the values in range until it finds the mystery number.
function linearSearch(targetNumber, values) {
  console.log(values);
  for (let i = 1; i < values.length; i++) {
    if (i === targetNumber) {
      return "The mystery number is " + i + "!";
    }
  }
}

//binary search function sets three points mid, low, high to aid search when midpoint is equal to target number target number is returned.
function binarySearch(targetNumber, max) {
  let mid,
    low = 1,
    high = max;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (mid === targetNumber) {
      return "The mystery number is " + mid + "!";
    } else if (mid < targetNumber) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Your target value cannot be found";
}

let increment = 1000;
let max = 5000000;

// Generating array of values for linear and binary search to search through.
const buildArraySizes = (max, increment) => {
  let arr = [];
  for (let i = increment; i <= max + increment; i += increment) {
    arr.push(i);
  }
  return arr;
};

const myData = buildArraySizes(max, increment);

//Calculates the time taken for the linear and binary search functions to find the mystery number and pushes the result to the CSV generating function.

function timeValues(arr) {
  var result = [];

  for (let i = 0; i <= arr.length; i++) {
    // console.log("i " + i);
    //console.log("arr.length " + arr.length);
    let secret = Math.floor(Math.random() * arr);

    let startLinear = getNanoTime();
    linearSearch(secret, arr);
    let endLinear = getNanoTime();
    let totalLinear = endLinear - startLinear;

    let startBinary = getNanoTime();
    binarySearch(secret, arr[i]);
    let endBinary = getNanoTime();
    let totalBinary = endBinary - startBinary;
    console.log("totalBinary " + totalBinary);
    console.log("totalLinear " + totalLinear);

    let tempArray = [];
    tempArray.push(totalLinear, totalBinary);
    tempArray.unshift(arr[i]);

    result.push(toCSV(tempArray));
  }
  result.unshift("");
  return result;
}

//console.log("timeValues(myData) " + timeValues(myData));

//Creating csv file, specifying comma seperated values and values on new line.
function toCSV(array) {
  return array.join(",") + "\n";
}

const csvData = toCSV(timeValues(myData));

fs.writeFileSync("Result.csv", csvData);
