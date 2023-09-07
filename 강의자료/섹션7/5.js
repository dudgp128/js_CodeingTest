function solution(size, arr) {
  let cache = new Array(5).fill(0);

  for (let x of arr) {
    let idx = cache.indexOf(x);
    if (idx !== -1) {
      cache.splice(idx, 1);
    } else {
      if (cache.includes(0) || cache.length === size) {
        cache.pop();
      }
    }
    cache.unshift(x);
    console.log(cache);
  }
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
