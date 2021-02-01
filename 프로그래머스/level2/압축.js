function solution(msg) {
  const dic = [];

  for (let i = 0; i < 26; i++) {
    dic.push(String.fromCharCode(i + 65));
  }
  let ans = [];
  // KAKAO
  let nowPos = 0;
  let findLen = 1;
  let length = msg.length;
  let add = -1;
  while (nowPos < length && nowPos + findLen <= length) {
    let str = msg.substring(nowPos, nowPos + findLen);
    let idx = dic.indexOf(str);
    //사전에 있으면
    if (idx != -1) {
      add = idx + 1;
      findLen++;
      continue;
    }
    ans.push(add);
    dic.push(str);
    add = -1;
    nowPos = nowPos + findLen - 1;
    findLen = 1;
  }
  if (add != -1) ans.push(add);
  console.log(ans);
}
const msg = "KAKAO";
solution(msg);
