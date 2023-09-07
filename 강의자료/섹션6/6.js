function solution(n, k) {
  let circle = Array.from({ length: n }, (e, i) => i + 1);

  while (circle.length > 1) {
    for (let i = 1; i <= k; i++) {
      let temp = circle.shift();
      circle.push(temp);
    }
    circle.pop();
  }
  return circle[0];
}

console.log(solution(8, 3));
