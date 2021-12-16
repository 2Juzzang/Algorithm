const input = require('fs').readFileSync('example.txt').toString().split('\n');

const word = input[0].split('');
let abc = [];
alphabet = 'abcdefghijklmnopqrstuvwxyz';
abc.push(...alphabet.split(''));
let abcIndex = [];
for (let i = 0; i < abc.length; i++) {
  abcIndex.push(word.indexOf(abc[i]));
}
console.log(...abcIndex);

// 처음 봤을땐 어떻게 접근해야 좋을지 몰라서 포기했다가 문득 indexOf 메서드가 생각나서 해봤다.
// indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
// 반환된 인덱스를 배열에 담았고 이를 스프레드 문법을 사용해 출력했다.
