function solution(m, ps, pt) {
  let max = Number.MIN_SAFE_INTEGER;

  function DFS(L, t, score) {
    console.log(L, t, score);

    if (t > m) {
      return;
    }
    if (L === ps.length) {
      if (t <= m) {
        max = Math.max(max, score);
      }
    } else {
      DFS(L + 1, t + pt[L], score + ps[L]);
      DFS(L + 1, t, score);
    }
  }

  DFS(0, 0, 0);
  return max;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
