function solution(c, stable) {
  let sorted = stable.sort((a, b) => a - b);
  let place = Array.from({ length: sorted[sorted.length - 1] }).fill(0);
  for (let x of stable) {
    place[x - 1] = 1;
  }

  console.log(place);

  let lt = place[0];
  let rt = place[place.length - 1];
  let distance = 0;
  let count = c - 2;
  let max = 0;
  while (count > 0) {
    let mid = parseInt((lt + rt) / 2);

    if (place[mid] === 1) {
      count--;
      max = Math.max(max, mid - lt, rt - mid);
    } else {
      let lt_length = place.slice(lt + 1, mid).filter((e) => e === 1).length;
      let rt_length = place.slice(mid, rt - 1).filter((e) => e === 1).length;
      if (lt_length > rt_length) {
        rt = mid;
      } else {
        lt = mid;
      }
    }
  }
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
