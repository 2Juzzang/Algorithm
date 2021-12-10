const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 총 테스트 케이스만큼 반복
for (let k = 1; k <= input[0]; k++) {
  let t = input[k].split(' ')[0];
  let s = input[k].split(' ')[1];
  let string = '';
  // 주어진 글자의 수만큼 반복
  for (let i = 0; i < s.length; i++) {
    // 글자별로 주어진 반복 횟수만큼 반복
    for (let j = 0; j < t; j++) {
      string += s.split('')[i];
    }
  }
  console.log(string.trim());
}

// for문을 세 번을 태워?
