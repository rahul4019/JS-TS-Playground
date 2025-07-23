function helper(arr: string[], low: number, high: number): string[] {
  if (low >= high) return arr;

  let temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;

  helper(arr, low + 1, high - 1);
  return arr;
}

function reverseStr(str: string): string {
  const reversedArr = helper(str.split(''), 0, str.length - 1);
  return reversedArr.join("");
}

// console.log(reverseStr('rahul'));
console.log(reverseStr('r'));
