const arr = [3, 8, 15, 23, 32, 37, 42, 56, 71, 89];

function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const index = binarySearch(arr, 23);

console.log('RESULT: ', index);
