function solution(k, arr) {
  let max = 0;
  for (let lt = 0; lt < arr.length - 2; lt++) {
    let sum = 0;
    sum = arr.slice(lt, lt + 3).reduce((acc, cur) => acc + cur);
    max = Math.max(max, sum);
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
