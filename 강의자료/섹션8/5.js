function solution(arr) {
  let total = arr.reduce((acc, cur) => acc + cur);
  let sum = 0;
  let answer = "NO";
  DEF(0, 0);
  function DEF(L, s) {
    if (L === arr.length) {
      if (total - sum === sum) return (answer = "YES");
    } else {
      DEF(L + 1, (sum += arr[L]));
      DEF(L + 1, sum);
    }
  }
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
