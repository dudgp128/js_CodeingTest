function solution(a, b) {
  const count = a.length;
  let result = "";

  for (let i = 0; i < count; i++) {
    a[i] === b[i]
      ? (result += "D")
      : a[i] === 1 && b[i] === 3
      ? (result += "A")
      : a[i] === 2 && b[i] === 1
      ? (result += "A")
      : a[i] === 3 && b[i] === 2
      ? (result += "A")
      : (result += "B");
  }

  return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
