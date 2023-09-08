function solution(target, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let middle = Math.floor(arr.length / 2);
  let lt = middle;
  let rt = middle + 1;
  while (lt > 0 || rt < arr.length) {
    if (sorted[lt] === target) {
      return lt + 1;
    } else if (sorted[rt] === target) {
      return rt + 1;
    }
    lt--;
    rt++;
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
