function subArrays(arr: number[]): number[][] {
  let subArrays: number[][] = [];

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      subArrays.push(arr.slice(start, end + 1));
    }
  }

  return subArrays;
}

console.log(subArrays([1, 2, 3, 4]));
