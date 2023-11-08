function solution(str, t) {
  let distance = 0;
  let result = [];

  const findLeftDistance = (str) => {
    let array = [];

    for (let e of str) {
      if (e === t) {
        distance = 0;
        array.push(distance);
      } else {
        distance++;
        array.push(distance);
      }
    }

    return array;
  };

  let left_distance = findLeftDistance(str);
  let reversed_str = str.split("").reverse().join("");
  let right_distance = findLeftDistance(reversed_str).reverse();
  for (let i = 0; i < str.length; i++) {
    result.push(Math.min(left_distance[i], right_distance[i]));
  }
  console.log(result);
}

let str = "teachermode";
console.log(solution(str, "e"));
