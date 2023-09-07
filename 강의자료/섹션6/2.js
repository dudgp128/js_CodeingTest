function solution(s) {
  let flag = 0;
  let flags = [];
  let result = "";
  for (let x of s) {
    if (x === "(") flags.push(x);
    if (x === ")") flags.pop();
    else if (flags.length === 0) {
      result += x;
    }
  }

  return result;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
