const arr = [10, 5, 3, 4, 3, 5, 6];

function firstRepeated(nums: number[]): number {
  const set = new Set<number>();

  for (let num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return -1;
}

console.log(`repeated num: ${firstRepeated(arr)}`);
