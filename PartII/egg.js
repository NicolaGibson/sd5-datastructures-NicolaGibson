function getNumDropsRecursive(eggs, floors) {
  if (eggs == 1 || floors == 0 || floors == 1) {
    return floors;
  }

  let minimum = Infinity;
  for (let floor = 1; floor <= floors; floor++) {
    minimum = Math.min(
      minimum,
      1 +
        Math.max(
          getNumDropsRecursive(eggs - 1, floor - 1),
          getNumDropsRecursive(eggs, floors - floor)
        )
    );
  }

  return minimum;
}

//Function returns the number of drops you need in the worst case to find the floor.

function getNumDropsDP(eggs, floors) {
  const numdrops = [
    null,
    [...Array(floors + 1).keys()],
    ...Array.from(Array(eggs - 1), _ => [0, 1])
  ];
  for (let remainingEggs = 2; remainingEggs <= eggs; remainingEggs++) {
    for (let choices = 2; choices <= floors; choices++) {
      let minimum = Infinity;
      for (let dropAt = 1; dropAt <= choices; dropAt++) {
        minimum = Math.min(
          minimum,
          1 +
            Math.max(
              numdrops[remainingEggs - 1][dropAt - 1],
              numdrops[remainingEggs][choices - dropAt]
            )
        );
      }
      numdrops[remainingEggs][choices] = minimum;
    }
  }
  return numdrops[eggs][floors];
}
console.log(getNumDropsRecursive(3, 100));
console.log(getNumDropsDP(3, 100));
