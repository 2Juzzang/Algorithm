function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i] + numbers[j], i, j);
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort((a, b) => a - b);
  const set = new Set(answer);
  return [...set];
}
solution([2, 1, 3, 4, 1]);
