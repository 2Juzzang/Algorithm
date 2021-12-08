const input = require('fs').readFileSync('example.txt').toString().split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

// 현재 시간에서 45분을 뺐을 때 0분 보다 낮은경우 1시간을 빼준다.
if (m - 45 < 0) {
  // 1시간을 뺀 나머지가 음수일 경우 +24시간
  if (h - 1 < 0) {
    // 45분을 뺀 나머지가 음수일 경우 + 60분
    m = m - 45 + 60;
    h = h - 1 + 24;
    console.log(h, m);
  } else {
    // 1~23시의 경우 -1을 해도 0 아래로 떨어지지 않기 때문에 +24를 하지 않음
    m = m - 45 + 60;
    h = h - 1;
    console.log(h, m);
  }
} else if (m - 45 >= 0) {
  // 45분을 뺀 나머지가 음수가 아니면 45분을 빼주기만 하고 출력
  m = m - 45;
  console.log(h, m);
}
