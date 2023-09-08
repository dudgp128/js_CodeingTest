function solution(target, arr) {
  let lt = 0;
  let rt = arr.length - 1;
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let answer = 0;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (sorted[mid] > target) {
      rt = mid;
    } else if (sorted[mid] < target) {
      lt = mid;
    } else if (sorted[mid] === target) {
      answer = mid;
      break;
    }
  }
  return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
