function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  arr.forEach((el, index) => {
    if (el < smallest) {
      smallest = el;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}

// console.log(selectionSort([5,3,6,2,10]));
