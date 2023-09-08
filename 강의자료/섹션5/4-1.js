function solution(m, arr) {
  let sum = 0;
  let count = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    if (m >= arr[rt]) {
      count++;
    }
    sum += arr[rt];
    if (sum <= m) count++;
    while (sum > m) {
      sum -= arr[lt++];
      if (sum <= m) {
        count++;
      }
    }
  }
  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
