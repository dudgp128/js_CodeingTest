function solution(a, b) {
  let result = 0;
  function makeMap(str) {
    let map = new Map();
    for (let x of str) {
      if (map.has(x)) map.set(x, map.get(x) + 1);
      else map.set(x, 1);
    }
    return map;
  }

  let text_map = makeMap(b);

  let window = b.length;
  for (let i = 0; i <= a.length - window; i++) {
    let flag = 1;
    let temp = makeMap(a.slice(i, i + 3));
    if (temp.size != text_map.size) continue;
    for (let [key, value] of temp) {
      if (!text_map.has(key)) {
        flag = 0;
        break;
      }
      if (text_map.get(key) != value) {
        flag = 0;
        break;
      }
    }
    if (flag) result++;
  }
  console.log(result);
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
