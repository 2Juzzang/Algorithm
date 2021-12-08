const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

let i = 0;
// length 사용
while (i < input.length) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);
  console.log(a + b);
  i++;
}

// 예외처리(try, catch) 사용
while (true) {
  try {
    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);
    console.log(a + b);
    i++;
  } catch {
    break;
  }
}

// .trim()을 입력값에 안써줘서 틀렸다..
// 예외처리(try, catch)를 이용해서도 풀 수 있다.
// EOF(End of File)는 데이터 소스로부터 더 이상 읽을 수 있는 데이터가 없음을 나타냄
