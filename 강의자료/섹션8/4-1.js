function solution(n) {
  let stack = Array.from({ length: n }, () => 0);
  DFS(1);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 0; i < n + 1; i++) {
        if (stack[i] === 1) tmp += i;
      }
      console.log(tmp);
    } else {
      stack[v] = 0;
      DFS(v + 1);
      stack[v] = 1;
      DFS(v + 1);
    }
  }
}

console.log(solution(3));
