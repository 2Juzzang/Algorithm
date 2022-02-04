function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    let idx = participant.indexOf(completion[i]);
    participant.splice(idx, 1);
  }

  return participant[0];
}
