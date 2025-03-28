const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Alice', age: 25 },
  { id: 4, name: 'Charlie', age: 35 },
  { id: 5, name: 'Bob', age: 30 },
];

const uniqueObjects = (arr) => {
  const seen = new Set();
  return arr.filter((item) => {
    const identifier = `${item.name}-item-seen`;
    if (seen.has(identifier)) {
      return false;
    }
    seen.add(identifier);
    return true;
  });
};

console.log(uniqueObjects(data));
