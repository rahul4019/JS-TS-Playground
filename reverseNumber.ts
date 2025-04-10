function reverse(num: number): number {
  let res = '';

  let myNum = Math.abs(num);

  while (myNum > 0) {
    let remainder = myNum % 10;
    res += remainder;
    myNum = Math.floor(myNum / 10);
  }

  return num < 0 ? -Number(res) : Number(res);
}

console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(-120));
