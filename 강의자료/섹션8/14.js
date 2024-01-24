function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let j = 1;
  let count = 0;
  function DFS(L) {
    if (L == m) {
      console.log(tmp);
      count++;
      tmp.pop();
      L--;
      return;
    } else {
      for (let i = j; j <= n; i++) {
        tmp.push(i);
        j = i + 1;
        DFS(L + 1);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 2));
