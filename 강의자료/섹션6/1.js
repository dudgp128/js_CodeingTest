function solution(s) {
  let array = [];

  for (let x of s) {
    if (x === "(") {
      array.push(x);
    } else {
      if (array.length == 0) {
        return "NO";
      } else {
        array.pop();
      }
    }
  }
  return array.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
let b = "(())()";
let c = "(()()))";
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));
