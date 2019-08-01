// Write an algorithm that takes an array and moves all of the zeros (number) to the end,
// preserving the order of the other elements.
// Example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = (srcArr) => {
  if (!Array.isArray(srcArr)) return [];
  const nonZeros = srcArr.filter(item => item !== 0);
  const zeros = Array(srcArr.length - nonZeros.length).fill(0);
  return nonZeros.concat(zeros);
};

module.exports = moveZeros;
