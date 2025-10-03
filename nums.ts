const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 2, 5];

type Formatted = {
  number: number;
  count: number;
};

const freqMap = new Map<number, number>();

for (const num of numbers) {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
}

const res = Array.from(freqMap.entries()).map(([num, count]) => ({
  number: num,
  count,
}));

console.log(res);
