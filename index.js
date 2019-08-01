// Write an algorithm that takes an array and moves all of the zeros (number) to the end,
// preserving the order of the other elements.
// Example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = (array) => {
  if (!Array.isArray(array)) return [];
  const solution = [];
  array.forEach((element) => {
    if (element !== 0) solution.push(element);
  });
  // eslint-disable-next-line no-plusplus
  for (let i = solution.length; i < array.length; i++) {
    solution.push(0);
  }
  return solution;
};

module.exports = moveZeros;
