const category = {
  category: 'bill',
  //   description: 'some description',
  description: undefined,
  //   type: 'EXPENSE',
  type: undefined,
  colorCode: '#fff',
};

const filteredData = Object.fromEntries(
  Object.entries(category).filter(([_, value]) => value !== undefined)
);
console.log(filteredData);
