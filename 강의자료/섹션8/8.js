function solution(n, m) {
  let result = [];
  function DFS(L, result) {
    if (L > n) {
      return;
    }
    if (L < 0) {
      return;
    }
    if (result.length > m) {
      return;
    } else if (result.length === m) {
      console.log(L, result);
      return;
    } else {
      result.push(L + 1);
      DFS(L + 1, result);
      result.pop();
      DFS(L + 1, result);
    }
  }

  DFS(0, []);
}

console.log(solution(3, 2));
