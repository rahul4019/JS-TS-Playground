function pow(x: number, n: number): number {
  if (n < 0) {
    // let res = 1 / x;
    // res = res * pow(x, n + 1);
    // return res;
    return 1/pow(x, n);
  }

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  let res = x;
  res *= pow(x, n - 1);
  return res;
}

console.log(pow(2, -200000000));
