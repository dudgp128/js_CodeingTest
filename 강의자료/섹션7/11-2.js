function solution(capacity, songs) {
  let min = Math.max(...songs);
  let max = songs.reduce((acc, cur) => acc + cur);
  let result = max;
  let temp = 0;

  while (min <= max) {
    temp++;
    if (temp > 20) {
      break;
    }
    let count = 1;
    let contain = parseInt((min + max) / 2);
    let sum = 0;
    for (let i = 0; i < songs.length; i++) {
      sum += songs[i];

      if (sum > contain) {
        count++;
        sum = songs[i];
      }
    }
    console.log(contain, count);
    if (count > capacity) {
      min = contain + 1;
    } else if (count <= capacity) {
      result = contain;
      max = contain - 1;
    }
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //17
let arr2 = [2, 3, 1, 4, 1, 5, 2, 4];
let arr3 = [3, 1, 2, 3, 4, 1, 2, 3];
console.log(solution(3, arr)); // 17
console.log(solution(2, arr2)); // 11
console.log(solution(4, arr3)); // 5
