function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    // 알파벳 소문자 숫자, 언더바(_), ., - 을 제외한 모든 문자 제거
    .replace(/[^\w\.\-]/g, '')
    // '.'이 2개 이상일 경우 '.' 으로 치환 {2}는 2개, {2,}는 2개 이상
    .replace(/\.{2,}/g, '.')
    // .으로 시작하거나(^) .으로 끝난다면($) 공백으로 치환
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer.substr(-1));
  }
  return console.log(answer, '앤스워');
}
solution('=.=');
solution('z-+.^.');
solution('...!@BaT#*..y.abcdefgh.ijklm.');
solution('123_.def');
