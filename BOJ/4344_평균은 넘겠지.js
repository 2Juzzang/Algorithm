const input = require('fs').readFileSync('example.txt').toString().split('\n');

let n = input[0];

for (let i = 1; i <= n; i++) {
  // 케이스별 학생의 수
  let students = Number(input[i].split(' ')[0]);
  // 케이스별 학생들의 점수
  let score = [];
  // 케이스별 학생들의 점수 총합
  let sum = 0;
  for (let j = 1; j <= students; j++) {
    // 이중 반복문으로 점수 누적
    sum += Number(input[i].split(' ')[j]);
    // 점수를 배열에 추가
    score.push(Number(input[i].split(' ')[j]));
  }
  // 평균점수
  let avg = sum / students;
  // 평균점수보다 높은 학생들의 점수만 배열로 담고 배열의 길이(평균이상 학생)를 추출
  let highScore = score.filter((score) => score > avg).length;
  // 평균점수 이상인 학생의 비율
  console.log(((highScore / students) * 100).toFixed(3) + '%');
}

// 케이스별 학생의 수를 처음에는
// let students = Number(input[i][0]); 이 상태 였는데 값이 잘 출력돼서 이상이 있는지 생각을 못했다.
// let students = Number(input[i].split(' ')[0]);로 고쳐줘서 해결했다.
