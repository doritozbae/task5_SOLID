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
