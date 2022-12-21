// euclidean algorithm to solve field task
function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

// console.log(gcd(1680, 640));

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
