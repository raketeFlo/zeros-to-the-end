// Write an algorithm that takes an array and moves all of the zeros (number) 
// to the end,
// preserving the order of the other elements.
// Example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = (arr) => {
  if (!Array.isArray(arr)) return [];
  const newArr = [];
  const zeros = [];
  arr.forEach((el) => {
    if (el === 0) zeros.push(0);
    else newArr.push(el);
  });

  return [...newArr, ...zeros];
  // add your code here
};

module.exports = moveZeros;
