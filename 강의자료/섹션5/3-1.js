function solution(m, arr) {
  let lt = 0;
  let sum = 0;
  let count = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) count++;
    while (sum > m) {
      sum -= arr[lt++];
      if (sum === m) {
        count++;
        break;
      }
    }
  }
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
