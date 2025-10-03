function firstRepeatingElement(nums: number[]): number {
  const countMap: Map<number, number> = new Map();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of nums) {
    if ((countMap.get(num) ?? 0) > 1) {
      return num;
    }
  }
  return -1;
}

console.log(firstRepeatingElement([10, 5, 3, 4, 3, 5, 6]));
// console.log(firstRepeatingElement([1, 2, 3, 4]));
