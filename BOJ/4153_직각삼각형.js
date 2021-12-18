const input = require('fs').readFileSync('example.txt').toString().split('\n');
for (let i = 0; i < input.length; i++) {
  let num = input[i].split(' ');
  num.sort((a, b) => a - b);
  let a = Number(num[0]);
  let b = Number(num[1]);
  let c = Number(num[2]);
  if (a === 0) break;
  if (a * a + b * b === c * c) {
    console.log('right');
  } else console.log('wrong');
}

// 0이 들어오는 경우에 대한 처리를 해줘야한다.
