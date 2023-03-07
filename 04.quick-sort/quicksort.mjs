const algorithm = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr.pop();
  const less = [];
  const greater = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] >= pivot ? greater.push(arr[i]) : less.push(arr[i]);
  }
  return algorithm(less).concat(pivot, algorithm(greater));
};

export default algorithm;
