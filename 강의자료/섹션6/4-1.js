function solution(s) {
  let stack = [];

  const calc = (lt, x, rt) => {
    console.log(lt, x, rt);
    if (x === "*") return lt * rt;
    if (x === "+") return lt + rt;
    if (x === "-") return lt - rt;
    if (x === "/") return lt / rt;
  };

  for (let x of s) {
    if (isNaN(x)) {
      let rt = Number(stack.pop());
      let lt = Number(stack.pop());
      stack.push(calc(lt, x, rt));
    } else {
      stack.push(x);
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
