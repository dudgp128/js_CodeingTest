function solution(test) {
  let count = 0;
  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      if (i === j) continue;
      else {
        let flag = 1;
        for (let a of arr) {
          if (a.indexOf[i] > a.indexOf[j]) {
            flag = 0;
            break;
          }
        }
        if (flag) {
          count++;
        }
      }
    }
  }
  return count;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
