function solution(s) {
  const sLen = s.length;
  const lenCnt = new Array(sLen).fill(0);

  for (let i = 0; i < sLen; i++) {
    let tempStr = "";
    let length = i + 1;
    let tempWord = s.substr(0, length);
    let tempCnt = 1;
    let start = 0 + length;

    while (start <= sLen) {
      let subStr = s.substr(start, length);

      if (tempWord !== subStr) {
        if (tempCnt == 1) {
          tempStr += tempWord;
        } else {
          tempStr += tempCnt + tempWord;
        }
        tempCnt = 1;
        tempWord = subStr;
      } else {
        tempCnt++;
      }

      start += length;
    }
    tempStr += tempWord;
    lenCnt[i] = tempStr.length;
  }
  console.log(Math.min.apply(null, lenCnt));
}

let s = "abcabcabcabcdededededede";
solution(s);
