function solution(s, t) {
  const t_index_list = s
    .split("")
    .map((element, index) => (element === t ? index : null))
    .filter((element) => element !== null);
  const list = Array.from({ length: s.length });

  p = 100;
  t_index = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== t_index_list[t_index]) {
      p++;
    } else {
      p = 0;
      t_index++;
    }
    list[i] = p;
  }

  p = 100;
  t_index = t_index_list.length - 1;
  for (let j = s.length - 1; j >= 0; j--) {
    if (j !== t_index_list[t_index]) {
      p++;
    } else {
      p = 0;
      t_index--;
    }
    list[j] = Math.min(list[j], p);
  }
  return list;
}

let str = "teachermode";
console.log(solution(str, "e"));
