function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let nowS = s.charAt(i);
        let topS = stack[stack.length - 1];
        stack.push(nowS);
        if (topS !== nowS) continue;
        stack.pop();
        stack.pop();
    }

    if (stack.length >= 1) console.log(0);
    else console.log(1);
}

const s = "cdcd";
solution(s);
