function helper(nums: number[], index: number): number[][] {
  // base case
  if (index === nums.length) return [[]];

  const partial = helper(nums, index + 1);
  let result: number[][] = [];

  for (let subset of partial) {
    result.push(subset);
    result.push([nums[index], ...subset]);
  }

  return result;
}

function subsets(nums: number[]): number[][] {
  return helper(nums, 0);
}

const result = subsets([1, 2, 3]);

console.log(result);
