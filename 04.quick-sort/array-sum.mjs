const algorithm = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr.pop() + algorithm(arr);
};

export default algorithm;
