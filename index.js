// Write an algorithm that takes an array and moves all of the zeros (number) to the end,
// preserving the order of the other elements.
// Example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (array) => {
  // add your code here
  if (!Array.isArray(array)) return [];
  const newArray = array.slice();
  for (let i = 0; i < array.length; i++) {
    if (newArray[i] === 0) {
      newArray.splice(i, 1);
      newArray.push(0)
    }
  }
  return newArray;
};

module.exports = moveZeros;
