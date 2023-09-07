function solution(arr) {
  let minus = [];
  let plus = [];

  for (let x of arr) {
    if (x < 0) minus.push(x);
    else plus.push(x);
  }
  return minus.concat(plus);
}
// -2, -3, 1 , 2 ,3
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
