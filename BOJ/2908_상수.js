const input = require('fs').readFileSync('example.txt').toString().split('\n');

const a = input[0].split('').reverse().join('').split(' ')[0];
const b = input[0].split('').reverse().join('').split(' ')[1];
if (a > b) {
  console.log(a);
} else console.log(b);

// join메서드는 split의 반대로, 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
