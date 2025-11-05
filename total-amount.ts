const transactions = [
  { userId: 1, amount: 200 },
  { userId: 2, amount: 300 },
  { userId: 1, amount: 400 },
  { userId: 3, amount: 150 },
  { userId: 2, amount: 100 },
];

type Transaction = {
    userId: number;
    amount: number;
}

const transformed = transactions.reduce((acc,curr) =>  {
    return  acc
},[] as Transaction[])