const sentence = 'Hello world from ChatGPT';

const arr = sentence
  .split(' ')
  .map((word) => {
    return word.split('').reverse().join('');
  })
  .join(' ');
console.log(arr);
