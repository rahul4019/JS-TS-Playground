function arrSum(arr: number[]): number {
  if (arr.length === 0) return 0;

  return arr[0] + arrSum(arr.slice(1))
}

console.log(arrSum([1, 2, 3, 4, 5]));
