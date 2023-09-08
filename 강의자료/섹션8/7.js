function solution(m, ps, pt) {
  let max_sum = 0;
  DEF(0, 0, 0);

  function DEF(L, t, s) {
    if (t > m) return;
    if (L === ps.length) {
      max_sum = Math.max(max_sum, s);
    } else {
      DEF(L + 1, t + pt[L], s + ps[L]);
      DEF(L + 1, t, s);
    }
  }
  return max_sum;
}

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt)); // 걸린 시간
