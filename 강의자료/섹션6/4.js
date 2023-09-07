function solution(s) {
  let numbers = [];

  function calc(num1, x, num2) {
    if (x === "*") return Number(num1) * Number(num2);
    if (x === "+") return Number(num1) + Number(num2);
    if (x === "/") return Number(num1) / Number(num2);
    if (x === "-") return Number(num1) - Number(num2);
  }
  for (let x of s) {
    if (!isNaN(x)) {
      numbers.push(x);
    } else {
      let rt = numbers.pop();
      let lt = numbers.pop();
      numbers.push(calc(lt, x, rt));
    }
  }
  return numbers[0];
}

let str = "352+*9-";
console.log(solution(str));
