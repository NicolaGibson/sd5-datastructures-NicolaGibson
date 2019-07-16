/*
W(numberOfEggs,numberOfFloors) = 1 + min{max(W(numberOfEggs − 1, x − 1), W(numberOfEggs,numberOfFloors − x)): x = 1, 2, ..., numberOfFloors }

with W(numberOfEggs,0) = 0 for all numberOfEggs > 0 and W(1,numberOfFloors) = numberOfFloors for all numberOfFloors.
*/

function f(numberOfEggs, numberOfFloors) {
  if (numberOfFloors == 0 && numberOfEggs > 0) return 0;

  if (numberOfEggs == 1) return numberOfFloors;

  let best = Infinity;

  for (let x = 1; x <= numberOfFloors; x++)
    best = Math.min(
      best,
      Math.max(f(numberOfEggs - 1, x - 1), f(numberOfEggs, numberOfFloors - x))
    );

  return 1 + best;
}

function findFloor(eggs, floors) {
  if (eggs === 1 || floors === 0 || floors === 1) {
    return floors;
  }

  var minDrops = Math.ceil((-1 + Math.sqrt(1 + 8 * floors)) / 2);
  return Math.min(minDrops, findFloor(eggs - 1, minDrops));
}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    let a = f(i, j);
    let b = findFloor(i, j);

    if (a != b) {
      console.log(
        `numberOfEggs,numberOfFloors: ${i},${j}; f: ${a}; findFloors: ${b}`
      );
    }
  }
}
