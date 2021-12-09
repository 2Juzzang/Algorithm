const input = require('fs').readFileSync('example.txt').toString().split('\n');

const string = String(input[0] * input[1] * input[2]);
for (let i = 0; i < 10; i++) {
  console.log(string.split(i + '').length - 1);
}

// 참고
// https://gurtn.tistory.com/41

// split을 하게되면 해당 문자를 기준으로 배열로 나뉘게 되는 것을 이용,
// 배열의 개수를 체크 후 -1로 문자의 개수를 센다.
// 상상도 못한 방법 진짜 나만 빼고 다 똑똑하다..
