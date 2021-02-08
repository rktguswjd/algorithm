function solution(dirs) {
    const map = new Array(11);
    for (let i = 0; i < 11; i++) {
        map[i] = new Array(11);
        for (let j = 0; j < 11; j++) {
            map[i][j] = new Array(4).fill(0);
        }
    }

    let startY = 5;
    let startX = 5;
    let count = 0;
    for (let i = 0; i < dirs.length; i++) {
        let comm = dirs.charAt(i);
        if (comm === "U") {
            if (startY - 1 < 0) continue;
            if (map[startY - 1][startX][2] === 1) {
                startY--;
                continue;
            }
            map[startY][startX][0] = 1;
            map[startY - 1][startX][2] = 1;
            startY--;
            count++;
        }

        if (comm === "D") {
            if (startY + 1 > 10) continue;
            if (map[startY + 1][startX][0] === 1) {
                startY++;
                continue;
            }
            map[startY][startX][2] = 1;
            map[startY + 1][startX][0] = 1;
            startY++;
            count++;
        }

        if (comm === "R") {
            if (startX + 1 > 10) continue;
            if (map[startY][startX + 1][3] === 1) {
                startX++;
                continue;
            }
            map[startY][startX][1] = 1;
            map[startY][startX + 1][3] = 1;
            startX++;
            count++;
        }

        if (comm === "L") {
            if (startX - 1 < 0) continue;
            if (map[startY][startX - 1][1] === 1) {
                startX--;
                continue;
            }
            map[startY][startX][3] = 1;
            map[startY][startX - 1][1] = 1;
            startX--;
            count++;
        }
    }
    console.log(count);
}

const dirs = "ULURRDLLU";
solution(dirs);
