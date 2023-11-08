function solution(c, arr) {
  let max = 0;

  function DFS(x, sum) {
    console.log(x, sum, max);
    if (sum > c) {
      return;
    }
    if (x === arr.length) {
      if (max < sum) {
        return (max = sum);
      }
    } else {
      DFS(x + 1, sum + arr[x]);
      DFS(x + 1, sum);
    }
  }
  DFS(0, 0);
  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
