const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split('\n')
  .map(Number);

let number = input;
let max = number[0];
// 9개의 서로 다른 자연수라고 주어졌기 때문에 9
for (let i = 0; i < 9; i++) {
  if (max < number[i]) {
    max = number[i];
  }
}
console.log(max);
console.log(number.indexOf(max) + 1);

// 바로 전에 풀었던 10818을 응용해서 sort로 풀려했지만
// 원본 배열이 바뀌는 상황이라 안된다는 글을 찾아서 for문을 이용했다.
