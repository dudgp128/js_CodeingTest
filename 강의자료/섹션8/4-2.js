function solution(n) {
  let arr = Array.from({ length: n.length }, () => {
    0;
  });

  function DFS(x) {
    if (x === n + 1) {
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
          result += i;
        }
      }
      console.log(result);
      return;
    } else {
      arr[x] = 1;
      DFS(x + 1);
      arr[x] = 0;
      DFS(x + 1);
    }
  }
  DFS(1);
}

console.log(solution(3));
