function solution(str1, str2) {
  let str1_map = new Map();
  let str2_map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (str1_map.has(str1[i])) str1_map.set(str1[i], str1_map.get(str1[i]) + 1);
    else str1_map.set(str1[i], 1);

    if (str2_map.has(str2[i])) str2_map.set(str2[i], str2_map.get(str2[i]) + 1);
    else str2_map.set(str2[i], 1);
  }

  for (let [key] of str2) {
    if (str1_map.get(key) != str2_map.get(key)) {
      return "NO";
    }
  }
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
