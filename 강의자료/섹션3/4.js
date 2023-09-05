function solution(s, t) {
<<<<<<< HEAD
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
=======
  const arr = s.split("");
  const index_list = arr
    .map((element, index) => {
      if (element === "e") {
        return index;
      }
    })
    .filter((e) => e != undefined);

  let score = Array.from({ length: arr.length });
  let index = 0;
  let p = 1001;
  for (let i = 0; i < s.length; i++) {
    if (i != index_list[index]) {
      p++;
    } else {
      p = 0;
      index++;
    }
    score[i] = p;
  }

  index = index_list.length - 1;
  p = 1001;
  for (let i = s.length - 1; i >= 0; i--) {
    if (i != index_list[index]) {
      p++;
    } else {
      p = 0;
      index--;
    }
    score[i] = Math.min(score[i], p);
  }
>>>>>>> 13e96ee047fb106202010c6a2ce53e48f8780ca1
}

let str = "teachermode";
console.log(solution(str, "e"));
