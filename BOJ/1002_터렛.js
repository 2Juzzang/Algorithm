const input = require('fs').readFileSync('example.txt').toString().split('\n');

const T = input[0];
for (let i = 1; i <= T; i++) {
  const n = input[i].split(' ');
  const distance = Math.sqrt((n[3] - n[0]) ** 2 + (n[4] - n[1]) ** 2);
  const r1 = Number(n[2]);
  const r2 = Number(n[5]);
  // 원이 두 점에서 만나는 경우
  if (distance > Math.abs(r1 - r2) && distance < r1 + r2) {
    console.log(2);
  } // 두 원이 외접하는 경우
  else if (distance === r1 + r2) {
    console.log(1);
  } // 두 원이 내접하는 경우
  else if (distance === Math.abs(r1 - r2) && distance !== 0) {
    console.log(1);
  } // 두 원이 떨어져 만나지 않는 경우
  else if (distance > r1 + r2) {
    console.log(0);
  }
  // 한 원이 다른 원 안에 있을 경우
  else if (distance < Math.abs(r1 - r2)) {
    console.log(0);
  }
  // 두 원의 중심이 일치하는 경우
  else if (distance === 0) {
    // 반지름이 같을 경우
    if (r1 === r2) {
      console.log(-1);
    }
    // 반지름이 다를 경우
    else {
      console.log(0);
    }
  }
}

// 두 원이 내접하는 경우를 생각하지 못해서 틀렸다.
