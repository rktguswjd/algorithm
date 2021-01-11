function solution(files) {
  for (let i = 0; i < files.length; i++) {
    let str = files[i];
    let start = -1;
    let end = -1;

    for (let j = 0; j < str.length; j++) {
      if (!isNaN(str.charAt(j)) && str.charAt(j) !== " ") {
        if (start == -1) start = j;
        end = j;
      } else {
        if (end != -1) break;
      }
    }

    let head = str.substring(0, start);
    let number = str.substring(start, end + 1);
    let tail = str.substring(end + 1, str.length);
    let temp = [head, number, tail, i];
    files[i] = temp;
  }

  files.sort((a, b) => {
    if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    else if (a[0].toLowerCase() === b[0].toLowerCase()) {
      if (+a[1] > +b[1]) return 1;
      else if (+a[1] == +b[1]) {
        return a[3] - b[3];
      }
    }
    return -1;
  });
  console.log(files);

  const answer = new Array(files.length);
  for (let i = 0; i < files.length; i++) {
    files[i].splice(3, 1);

    let combine = files[i].join("");
    answer[i] = combine;
  }
  console.log(answer);
}

const files1 = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];

const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

solution(files);
