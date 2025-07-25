function helper(arr: string[], low: number, high: number): boolean {
  if (low === high || high < 1) return true;
  if (arr[low] !== arr[high]) return false;
  return helper(arr, low + 1, high - 1);
}

function palindrome(str: string): boolean {
  return helper(str.split(''), 0, str.length - 1);
}

console.log(palindrome('radar'));
console.log(palindrome('refer'));
console.log(palindrome('noon'));
console.log(palindrome('0110'));
