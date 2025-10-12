Array.prototype.myMap = function (callback, thisArgs) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} is not a function.`);

  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback.call(thisArgs, this[i], i, this));
  }
  return res;
};

const user = [
  {
    id: 1,
    fName: 'rahul',
    lName: 'kumar',
  },
  {
    id: 2,
    fName: 'rakesh',
    lName: 'singh',
  },
];

const res = user.myMap((u) => ({ fullName: `${u.fName} ${u.lName}` }));

console.log(res)
