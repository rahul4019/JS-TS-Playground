const transactions: Transaction[] = [
  { id: 1, type: 'credit', amount: 100 },
  { id: 2, type: 'debit', amount: 50 },
  { id: 3, type: 'credit', amount: 70 },
  { id: 4, type: 'debit', amount: 30 },
];

type Transaction = { id: number; type: 'credit' | 'debit'; amount: number };

const getBalance = <T extends Transaction>(arr: T[]): number => {
  return arr.reduce((acc, curr) => {
    return curr.type === 'credit' ? acc + curr.amount : acc - curr.amount;
  }, 0);
};

console.log(getBalance(transactions));

type User = {
  id: number;
  name: string;
  age: number;
};

const users = [
  { id: 1, name: 'Rahul', age: 25 },
  { id: 2, name: 'Priya', age: 28 },
  { id: 3, name: 'Amit', age: 22 },
];

const updateUser = <T extends User>(
  users: T[],
  id: number,
  updates: Partial<T>
): T[] => {
  return users.reduce((acc, curr) => {
    if (curr.id === id) {
      curr = { ...curr, ...updates };
    }
    acc.push(curr);
    return acc;
  }, [] as T[]);
};

const updated = updateUser(users, 2, { age: 29, name: 'Priya Sharma' });
console.log(updated);
