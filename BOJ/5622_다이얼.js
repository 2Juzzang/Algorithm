const input = require('fs').readFileSync('example.txt').toString().split('\n');

const str = input[0].split('');
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');
let time = 0;
for (let i = 0; i < str.length; i++) {
  if (alphabet.indexOf(str[i]) < 3) {
    time += 3;
  } else if (alphabet.indexOf(str[i]) < 6) {
    time += 4;
  } else if (alphabet.indexOf(str[i]) < 9) {
    time += 5;
  } else if (alphabet.indexOf(str[i]) < 12) {
    time += 6;
  } else if (alphabet.indexOf(str[i]) < 15) {
    time += 7;
  } else if (alphabet.indexOf(str[i]) < 19) {
    time += 8;
  } else if (alphabet.indexOf(str[i]) < 22) {
    time += 9;
  } else if (alphabet.indexOf(str[i]) < 26) {
    time += 10;
  }
}
console.log(time);

// 문제를 잘 이해해야한다. 알파벳이 주어지고 알파벳이 없는 0과 1의 경우는 생각을 안해도 된다.
