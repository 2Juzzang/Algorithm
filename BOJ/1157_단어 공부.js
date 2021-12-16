const input = require('fs').readFileSync('example.txt').toString().split('\n');

const str = input[0].toUpperCase().split('');
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');
let count = Array(alphabet.length).fill(0);
// 알파벳 배열에서 해당 문자가 있는 인덱스를 찾아 해당 인덱스의 값에 +1을 해준다.
for (let i = 0; i < str.length; i++) {
  let idx = alphabet.indexOf(str[i]);
  if (idx != -1) {
    count[idx] += 1;
  }
}
// 위 배열에서 가장 높게 카운트 된 인덱스를 배열에 넣어주고
let arr = [];
for (let i = 0; i < count.length; i++) {
  if (Math.max(...count) === count[i]) {
    arr.push(i);
  }
}
// 배열의 길이가 1이면 1개이므로 대문자 알파벳을 출력, 아니면 ?를 출력한다.
// 반드시 단어가 주어지므로 0일 경우는 제외했다.
if (arr.length === 1) {
  console.log(alphabet[arr]);
} else console.log('?');
