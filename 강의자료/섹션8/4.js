function solution(n) {
  let arr = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) {
      let result = arr
        .map((el, index) => {
          if (el === 1) {
            return index + 1;
          } else {
            return;
          }
        })
        .filter((el) => el !== undefined);
      if (result.length) {
        console.log(result);
      }
      return;
    } else {
      arr[L] = 1;
      DFS(L + 1);
      arr[L] = 0;
      DFS(L + 1);
    }
  }
}

console.log(solution(3));
