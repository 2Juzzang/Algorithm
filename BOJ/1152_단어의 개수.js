const input = require('fs').readFileSync('example.txt').toString().split('\n');

const string = input[0].trim().split(' ');
if (string[0] === '') {
  string.pop();
}
console.log(string.length);

// 문자열이 아무것도 없는 공백일 경우 stringdl '' 로 출력되는 경우가 있었다
// 이 부분을 pop메서드로 없애서 해결할 수 있었다.
