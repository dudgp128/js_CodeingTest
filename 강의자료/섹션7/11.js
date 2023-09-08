function solution(m, songs) {
  let all_sum = songs.reduce((acc, cur) => acc + cur);
  let max_song = songs.reduce((acc, cur) => Math.max(acc, cur));

  let lt = max_song;
  let rt = all_sum;
  let result = 0;

  const count = (songs, size) => {
    let cnt = 1,
      sum = 0;
    for (let x of songs) {
      if (sum + x > size) {
        cnt++;
        sum = x;
      } else {
        sum += x;
      }
    }
    return cnt;
  };

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    console.log(mid, count(songs, mid), m);
    if (count(songs, mid) <= m) {
      result = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
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
