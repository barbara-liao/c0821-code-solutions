const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumNums = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(sumNums);
console.log('sum: ', sum);

const multNums = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(multNums);
console.log('product: ', product);

const acctBal = (previousValue, currentValue) => {
  for (let i = 0; i < account.length; i++) {
    if (currentValue.type === 'deposit') {
      return previousValue + currentValue.amount;
    } else if (currentValue.type === 'withdrawal') {
      return previousValue - currentValue.amount;
    }
  }
};
const balance = account.reduce(acctBal, 0);
console.log('balance: ', balance);

const combine = (traitsObj, currentValue) => Object.assign(traitsObj, currentValue);

const composite = traits.reduce(combine);
console.log('composite: ', composite);
