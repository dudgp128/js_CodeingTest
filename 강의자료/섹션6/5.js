function solution(s) {
  let count = 0;
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push({ slice: 0 });
    } else {
      let top = stack.pop();
      if (top.slice === 0) {
        for (let x of stack) {
          x.slice++;
        }
      } else {
        count += top.slice + 1;
      }
    }
  }
  return count;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
