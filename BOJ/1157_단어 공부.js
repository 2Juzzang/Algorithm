const input = require('fs').readFileSync('example.txt').toString().split('\n');

const str = input[0].toUpperCase().split('');
let alphabet = 'ABCDEFGHIZKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');
let count = Array(alphabet.length).fill(0);
for (let i = 0; i < alphabet.length; i++) {
  if (alphabet.includes(str[0])) {
  }
}
alphabet.filter((a) => {});
