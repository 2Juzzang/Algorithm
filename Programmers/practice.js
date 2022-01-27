function solution(lottos, win_nums) {
  let win = 0;
  let zero = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      win++;
    }
    if (lottos[i] === 0) {
      zero++;
    }
  }
  const rank = [6, 6, 5, 4, 3, 2, 1];
  return [rank[win + zero], rank[win]];
}
