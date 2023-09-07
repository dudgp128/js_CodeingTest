function solution(k, arr) {
  let lt = 0;
  let temp = arr.slice(0, k).reduce((acc, cur) => acc + cur);
  let max = temp;
  for (let rt = k; rt < arr.length; rt++) {
    temp = temp - arr[lt] + arr[rt];
    if (Math.max(max, temp) !== max) max = temp;
    lt++;
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
