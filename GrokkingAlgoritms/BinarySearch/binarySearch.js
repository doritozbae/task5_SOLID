function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

// const arr = [1, 3, 5, 7, 9];
// console.log(binarySearch(arr, 3));
// console.log(binarySearch(arr, -1));
