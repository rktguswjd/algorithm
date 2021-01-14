function solution(m, musicinfos) {
  m = m
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/G#/gi, "g")
    .replace(/A#/gi, "a");

  let music = [];
  for (let i = 0; i < musicinfos.length; i++) {
    let arr = musicinfos[i].split(",");
    arr.push(i);
    music.push(arr);
  }
  console.log(music);

  let flag = false;
  for (let i = 0; i < musicinfos.length; i++) {
    let a = music[i]
      .shift()
      .split(":")
      .map((n) => +n);
    let b = music[i]
      .shift()
      .split(":")
      .map((n) => +n);

    let aTime = a[0] * 60 + a[1];
    let bTime = b[0] * 60 + b[1];
    let diff = bTime - aTime;

    music[i].unshift(diff);
    let str = music[i][2]
      .replace(/C#/gi, "c")
      .replace(/D#/gi, "d")
      .replace(/F#/gi, "f")
      .replace(/G#/gi, "g")
      .replace(/A#/gi, "a");

    let musicStr = "";
    for (let j = 0; j < diff; j++) {
      musicStr += str;
    }
    musicStr = musicStr.substring(0, diff);

    if (musicStr.indexOf(m) != -1) {
      music[i].unshift(1);
      flag = true;
    } else {
      music[i].unshift(0);
    }
  }

  console.log(music);
  if (flag == true) {
    music.sort((a, b) => {
      if (a[0] < b[0]) return 1;
      else if (a[0] == b[0]) {
        if (a[1] < b[1]) return 1;
        else if (a[1] == b[1]) {
          if (a[4] > b[4]) return 1;
        }
      }
      return -1;
    });
    console.log(music[0][2]);
  } else {
    console.log("(None)");
  }
}

const m = "CC#BCC#BCC#BCC#B";
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];
solution(m, musicinfos);
