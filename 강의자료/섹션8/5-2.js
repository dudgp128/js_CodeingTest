function solution(arr) {
  let map = new Map();
  for (let i of arr) {
    map.set(i, 0);
  }
  let result = false;
  function DFS(x) {
    if (x === arr.length + 1) {
      let a = [0];
      let b = [0];
      for (let [key, value] of map) {
        if (value) {
          a.push(key);
        } else {
          b.push(key);
        }
        if (a.reduce((a, c) => a + c) === b.reduce((a, c) => a + c)) {
          return (result = true);
        }
      }
    } else {
      map.set(x, 1);
      DFS(x + 1);
      if (result) {
        return result;
      }
      map.set(x, 0);
      DFS(x + 1);
      if (result) {
        return result;
      }
    }
  }
  DFS(1);
  return result;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
