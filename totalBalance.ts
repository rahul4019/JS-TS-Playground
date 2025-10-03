type Transaction = {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
};

const transactions: Transaction[] = [
  { id: 1, type: 'credit', amount: 100 },
  { id: 2, type: 'debit', amount: 50 },
  { id: 3, type: 'credit', amount: 75 },
  { id: 4, type: 'debit', amount: 30 },
  { id: 5, type: 'credit', amount: 200 },
];

type TotalBalance = {
  totalCredit: number;
  totalDebit: number;
  balance: number;
};

const initial: TotalBalance = {
  totalCredit: 0,
  totalDebit: 0,
  balance: 0,
};

const result = transactions.reduce((acc, curr) => {
  if (curr.type === 'credit') {
    acc.totalCredit += curr.amount;
  } else {
    acc.totalDebit += curr.amount;
  }
  acc.balance = acc.totalCredit - acc.totalDebit;
  return acc;
}, initial);

console.log(`Total Balance: `, result);
