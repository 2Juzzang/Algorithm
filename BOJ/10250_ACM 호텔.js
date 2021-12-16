const input = require('fs').readFileSync('example.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let h = parseInt(input[i].split(' ')[0]);
  let n = parseInt(input[i].split(' ')[2]);
  let k = 1;
  while (true) {
    if (n <= h) {
      break;
    }
    n = n - h;
    k++;
  }
  console.log(n * 100 + k);
}

// 문과 가까운 호(1호)의 객실부터 층에 따라 채우기 시작해서 k호의 모든 층이 다 찼을 경우 호수 k가 1씩 늘어난다.
// (n번째 손님 - 층수) 를 k번 반복하다가 인원이 층수보다 낮을 때 그 값이 n번째 손님의 객실 층수가 되고 k는 호수가 된다.
