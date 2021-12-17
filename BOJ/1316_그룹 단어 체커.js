const input = require('fs').readFileSync('example.txt').toString().split('\n');

const T = parseInt(input[0]);
let countGroupWord = 0;
for (let i = 1; i <= T; i++) {
  const str = [];
  let isGroupWord = true;
  for (let j = 0; j < input[i].length; j++) {
    // 해당 글자를 배열에서 찾을 수 없다면 배열에 글자를 넣는다.
    if (str.indexOf(input[i][j]) === -1) {
      str.push(input[i][j]);
      // 해당 글자가 배열에 있을 경우,
      // str.length -1 = str.indexOf(input[i][j]) 같음!
    } else if (str.indexOf(input[i][j]) !== str.length - 1) {
      isGroupWord = false;
      break;
    }
    console.log(str.length);
  }
  if (isGroupWord) {
    countGroupWord += 1;
  }
}
// console.log(countGroupWord);
