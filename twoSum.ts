function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  nums.forEach((item, index) => map.set(item, index));

  for (let i = 0; i < nums.length - 1; i++) {
    const complement = target - nums[i];

    if (map.has(complement) && map.get(complement) !== i) {
      const index = map.get(complement);
      return [i, index!];
    }
  }

  return [0];
}

console.log(twoSum([2, 7, 11, 15], 9));
