function solution(s) {
  const map = new Map();
  map.set("zero", 0);
  map.set("one", 1);
  map.set("two", 2);
  map.set("three", 3);
  map.set("four", 4);
  map.set("five", 5);
  map.set("six", 6);
  map.set("seven", 7);
  map.set("eight", 8);
  map.set("nine", 9);

  let str = "";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let nowS = s.charAt(i);
    if (!isNaN(nowS)) {
      // 숫자라면
      result += nowS;
    } else {
      // 문자열이라면
      str += nowS;
      if (map.has(str)) {
        result += map.get(str);
        str = "";
      }
    }
  }
  console.log(result);
  return +result;
}

const s = "2three45sixseven";
solution(s);
