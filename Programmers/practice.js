function solution(n) {
  let root = Math.sqrt(n);
  return root - parseInt(root) === 0 ? (root + 1) ** 2 : -1;
}
solution(11);
