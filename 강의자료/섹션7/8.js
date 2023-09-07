function solution(meeting) {
  let max = 0;
  for (let i = 0; i < meeting.length; i++) {
    let count = 1;
    let idx = 1;

    let pointer = i;
    let result = [];

    while (idx < meeting.length) {
      if (meeting[idx].indexOf(meeting[pointer][1]) !== -1) {
        if (meeting[idx][0] > meeting[pointer][0]) {
          count++;
          result.push(meeting[pointer]);
          pointer = idx;
        }
      }
      idx++;
    }
    console.log(result, count);
    max = Math.max(max, count);
  }
  return max;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
