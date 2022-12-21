function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let i = arr.shift();
    return i + sum(arr);
  }
}

function countList(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    arr.shift();
    return 1 + countList(arr);
  }
}

let arr = [0, 1, 2, 3, 4, 5];
console.log(sum(arr));
console.log(countList(arr));
