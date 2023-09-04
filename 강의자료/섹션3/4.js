function solution(s, t) {
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
}

let str = "teachermode";
console.log(solution(str, "e"));
