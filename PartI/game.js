let targetNumber = randomNumber(1000);

function randomNumber(x) {
  let number = Math.floor(Math.random() * x);
  return number;
}

function randomArray(x, y) {
  let numberArray = [];
  for (let i = 0; i < x; i++) {
    numberArray.push(randomNumber(y));
  }
  return numberArray;
}
//implement linear and binary search - binary search will need the randomArray to be sorted.

function linearSearch(x, n) {
  for (let i = x; i <= n; i++) {
    console.log("Guessing" + i);
    if (i === targetNumber) {
      return "The random number is " + i + " Well done!";
    }
  }
}

function binarySearch(x, n) {
  let guess = Math.floor(n - x / 2);
  let difference = Math.floor(n - x) / 4;
  for (let i = 0; i <= n / 2; i++) {
    if (guess === targetNumber) {
      return guess;
    } else if (guess < targetNumber) {
      guess = guess - difference;
      difference = difference / 2;
    } else if (guess > targetNumber) {
      guess = guess + difference;
      difference = difference / 2;
    }
  }
  return "error";
}

console.log(binarySearch(1, 1000));

//try recursion call the binary search function with a new minimum and maximum.
