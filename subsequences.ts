function printSubsequences(str: string): void {
  function helper(index: number, curr: string) {
    // base case
    if (index === str.length) {
      console.log(curr);
      return;
    }

    // exclude
    helper(index + 1, curr);

    //include
    helper(index + 1, curr + str[index]);
  }

  helper(0, '');
}

printSubsequences('abc');
