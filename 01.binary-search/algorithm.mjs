const binarySearch = (arr, elem) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (elem === arr[mid]) return mid;
    else if (elem > arr[mid]) min = mid + 1;
    else if (elem < arr[mid]) max = mid - 1;
  }
  return null;
};

export default binarySearch;
