function solution(n) {
  let result = [];

  a(n);

  function a(n) {
    if (n === 1) {
      return result.unshift(1);
    } else {
      result.unshift(n % 2);
      n = Math.floor(n / 2);
      return a(n);
    }
  }

  return result.join("");
}

console.log(solution(11));
