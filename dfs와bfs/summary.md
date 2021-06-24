### DFS (깊이 우선 탐색)

#### 1. 기본 접근방식

- 조건처리
- 방문처리
- 갈곳처리

이 방식은 방문 후 조건을 처리한다.

```javascript
...

dfs(y, x);

...

function dfs(y, x) {
  /* 조건처리 */
  if(x<0 || y>0 || x>=xMax || y>=yMax) return;
  if(visit[y][x]) return;

  /* 방문처리 */
  visit[y][x] = true;

  /* 갈곳처리 */
  dfs(y-1,x)
  dfs(y+1,x)
  dfs(y,x-1)
  dfs(y,x+1)
}
```

#### 2. 제일 많이 사용되는 접근방식

- 방문처리
- 갈곳처리
  이 방식은 방문 전 조건을 처리한다.

```javascript
...

dfs(y, x);

...

function dfs(y, x) {
  /* 조건처리 */
  if(x<0 || y>0 || x>=xMax || y>=yMax) return;
  if(visit[y][x]) return;

  /* 방문처리 */
  visit[y][x] = true;

  /* 갈곳처리 */
  for (let i = 0; i < 4; i++) {
  let ny = y + dy[i];
  let nx = x + dx[i];

  if(nx<0 || ny>0 || nx>=xMax || ny>=yMax) return;
  if(visit[ny][nx]) return;
  dfs(ny, nx);
  }
}
```

#### 3. DFS와BFS를 선택하는 기준

1. 완전탐색만 하면 되는 상황
   - DFS와 BFS 중 아무거나 쓰면 되는데 쓰기 쉬운 DFS를 선호해서 사용
2. 탐색해야하는 노드가 많을 때
   - BFS를 사용
   - 콜스택 사이즈 초과 방지
3. 단지 이웃하거나 연결되있는지 확인하는 것이 아닌 다른 정보가 필요할 때
   - ex) 최단거리
   - BFS 사용
   - 이웃하거나 연결되있는지 확인하는 여부라면 DFS 사용
