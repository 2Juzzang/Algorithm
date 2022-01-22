function solution(n) {
  let answer = String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
  answer = Number(answer);
  return answer;
}
solution(118372);
