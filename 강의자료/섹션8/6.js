function solution(c, arr) {
  let max_sum = 0;
  DEF(0, 0);
  function DEF(L, sum) {
    if (sum > c) return;
    if (L === arr.length) {
      if (sum <= c) {
        max_sum = Math.max(max_sum, sum);
      }
    } else {
      DEF(L + 1, sum + arr[L]);
      DEF(L + 1, sum);
    }
  }
  return max_sum;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
