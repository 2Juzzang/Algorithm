const input = require('fs').readFileSync('example.txt').toString().split('\n');
let n = parseInt(input[0]);
let number = input[1].split(' ').map(Number);
let min = number[0];
let max = number[0];
for (let i = 0; i < n; i++) {
  // for문을 통해 배열을 돌면서 조건과 일치하는 number[i]를 min, max에 담은 뒤 반복한다.
  if (min > number[i]) {
    min = number[i];
  }
  if (max < number[i]) {
    max = number[i];
  }
}
console.log(min, max);

// Math.min , Math.max 메서드는 전달받은 인수 중에서 가장 작은 수, 가장 큰 수를 반환한다.
// 인수가 전달되지 않으면 min은 Infinity를, max는 -Infinity를 반환한다.
// 배열을 인수로 전달받아 배열의 요소 중 최소, 최대값을 구하려면 Function.prototype.apply 메서드나
// 스프레드 문법을 사용해야 한다.
// 위 방법으로 답을 구할 순 있으나 출제 의도와 맞지 않았던 것 같다.

// 다른 방법을 찾아보니 먼저 배열을 map을 통해 숫자 배열로 만들어주고
// sort를 이용해 오름차순으로 정렬하면 처음값이 최소, 마지막 값이 최대가 되는 것을 이용한 방법

// 또 다른 방법은 값을 첫 요소로 초기화 한 뒤, for문을 이용해서 배열을 돌면서 비교해서 추출하는 방법이다.
// 이 방법을 이용했다.
