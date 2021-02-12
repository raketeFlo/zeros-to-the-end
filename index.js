// Write an algorithm that takes an array and moves all of the zeros (number) 
// to the end,
// preserving the order of the other elements.
// Example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = (arr) => {
  if (!Array.isArray(arr)) return [];
  const len = arr.length;
  const newArr = new Array(len);
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      newArr[len - 1 - j] = 0;
      j += 1;
    } else {
      newArr[k] = arr[i];
      k += 1;
    }
  }

  return newArr;
};

module.exports = moveZeros;
