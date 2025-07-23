function printNums(lRange: number, uRange: number): void {
  // base case
  if (lRange > uRange) return;

  console.log(lRange);

  // recursive call
  printNums(++lRange, uRange);
}

printNums(1, 10);
