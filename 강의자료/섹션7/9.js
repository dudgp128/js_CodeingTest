function solution(times) {
  let sorted = times.sort((a, b) => {
    if (a[0] - b[0] == 0) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let start = sorted[0][0];
  let end = sorted[sorted.length - 1][1];
  let max = 0;
  for (let i = start; i < end; i++) {
    let count = 0;
    for (let x of times) {
      if (i > x[0] && i < x[1]) {
        count++;
      }
    }
    max = Math.max(max, count);
  }
  return max;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
