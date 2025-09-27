const numbers = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(nums: number[]): number[] {
  return [...new Set(nums)];
}

type Frequency = {
  [number: number]: number;
};

function countFrequency(nums: number[]): Frequency {
  const unique: Frequency = {};
  nums.forEach((num) => {
    !unique[num] ? (unique[num] = 1) : (unique[num] = unique[num] + 1);
  });

  return unique;
}

const freq = countFrequency(numbers);

const freqArray: { number: number; count: number }[] = Object.entries(freq).map(
  ([num, count]) => ({
    number: Number(num),
    count,
  })
);

// console.log(removeDuplicates(numbers));
// console.log(countFrequency(numbers));
console.log(freqArray);
