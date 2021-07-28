# 비트마스크(BitMask)

## 비트마스크란

- 비트마스크(BitMask)는 이진수를 사용하는 컴퓨터의 연산 방식을 이용하여, **정수의 이진수 표현을 자료 구조로 쓰는 기법**을 말한다.
- 이진수는 0 또는 1을 이용하므로 하나의 비트(bit)가 표현할 수 있는 경우는 두 가지다.
- 보통 어떤 비트가 1이면 '켜져 있다'라고 말하며, 0이면 '꺼져 있다'라고 말한다.

## 비트마스크 장점

1. 수행 시간이 빠르다.<br />
   비트마스크 연산은 bit연산이기 때문에 **O(1)**에 구현되는 것이 많다. 따라서 다른 자료구조를 이용하는 것보다 훨씬 빠르게 동작한다. 다만, 비트마스크를 이용하는 경우 비트의 개수만큼 원소를 다룰 수 있기 때문에 연산 횟수가 적은 경우에는 속도에 큰 차이가 없지만, 연산 횟수가 늘어날수록 차이가 매우 커진다.

2. 코드가 짧다.<br />
   다양한 집합 연산들을 비트연산자로 한 줄로 작성할 수 있기 때문에 반복문이나 조건문 등을 이용한 코드보다 훨씬 간결한 코드를 작성할 수 있다.

3. 메모리 사용량이 더 적다.<br />
   bit가 10개인 경우에는 각 bit당 두 가지 경우를 가지기 때문에 2^10가지의 경우를 10bit 이진수 하나로 표현 가능하다. 이처럼 하나의 정수로 매우 많은 경우의 수를 표현할 수 있기 때문에 메모리 측면에서 효율적이다.

## 비트 연산자

1. AND 연산

- **a&b**
- a의 모든 비트와 b의 모든 비트를 AND연산한다.
- 둘다 1이라면 1, 아니면 0

2. OR 연산

- **a|b**
- a의 모든 비트와 b의 모든 비트를 OR연산한다.
- 둘다 0이라면 0, 아니면 1

3. XOR 연산

- **a^b**
- a의 모든 비트와 b의 모든 비트를 XOR연산한다.
- 둘이 다르다면 1, 아니면 0

4. NOT 연산

- **~a**
- a의 모든 비트에 NOT연산을 한다.
- 0이면 1, 1이면 0

5. 시프트(shift) 연산

- **a<<b**
- a를 b비트 만큼 왼쪽으로 시프트

- **a>>b**
- a를 b비트 만큼 오른쪽으로 시프트

## 비트마스크를 이용한 집합 구현

비트마스크를 이용하면 집합을 쉽게 표현할 수 있다. 또, 집합에 원소를 추가, 삭제하는 등 다양한 연산을 굉장히 빠르게 수행할 수 있다.

원소의 개수가 N인 집합이 있을 때, 각각의 원소를 0번부터 N-1번까지 번호를 부여하고 번호에 해당하는 비트가 1이면 원소가 포함, 0이면 원소가 불포함이라고 한다면 집합을 비트를 이용해 표현헐 수 있다.

예를 들어, {A,B,C,D,E,F,G} 집합이 있을때 총 7개의 원소가 존재하므로 7개의 비트로 이 집합을 표현할 수 있다. 즉, 각 원소마다 비트를 하나씩 대응시켜 원소가 존재한다면 1, 존재하지 않는다면 0으로 표현할 수 있다.

{A}라는 부분집합은 64 = 10000000(2)로 표현하고, {C,F}는 18 = 0010010(2)로 표현한다.

### 원소 추가

현재 상태 cur이 있을 때, p번 원소를 추가한다면 현재 상태 cur에서 p번 비트를 1로 바꿔줘야 한다. OR연산자를 활용하면 쉽게 해결할 수 있다.

```javascript
cur |= 1 << p;
```

1 << p를 통해서 p번 비트만 1, 나머지 비트는 0인 값을 만들고 |연산을 진행한다면 cur의 p번 비트는 1로 바뀌게 되고, 나머지 비트는 원래 상태를 유지하게 된다.

### 원소 삭제

현재 상태 cur에서 p번 원소를 삭제한다면 p번 비트를 0으로 바꿔야한다.

```javascript
cur &= ~(1 << p);
```

1 << p를 통해 p번 비트만 1, 나머지 비트는 0으로 만든다. 그 후, ~연산을 통해 p번 비트만 0, 나머지 비트는 1로 만들고 &연산을 진행한다면 p번 비트만 0으로 바뀌고 나머지는 현재 상태 cur과 동일하게 유지할 수 있다.

### 원소 토글

p번 비트가 1이면 0, 0이면 1로 바꾼다.

```javascript
cur ^= 1 << p;
```

1 << p를 통해 p번 비트만 1, 나머지 비트는 0으로 만든다. cur의 나머지 비트들은 0과 XOR연산을 진행하므로 0이면 0, 1이면 1로 현재 상태를 유지하게 되고, p번 비트는 1과 XOR연산을 진행하므로 1이면 0, 0이면 1로 토글이 된다.

### 집합 연산

비트마스킹을 이용하면 원소를 추가, 삭제, 토글하는 연산 외에도 합집합, 교집합, 차집합 등 쉽게 구할 수 있다

```javascript
a | b; // a와 b의 합집합
a & b; // a와 b의 교집합
a & ~b; // a에서 b를 뺀 차집합
a ^ b; // a와 b중 하나에만 포함된 원소들의 집합
```

- A집합을 나타내는 a와 B집합을 나타내는 b가 있을때, 둘이 |연산을 하게 된다면 존재하는 원소들의 비트는 모두 1로 켜지게 되고, 두 집합에 모두 없는 원소들만 비트가 0이 된다. 따라서 합집합 연산이 된다.

- 마찬가지로 &연산을 하게되면, 두 집합에 모두 존재하는 원소들의 비트만 1과 1을 AND연산하게 되므로 1로 살아남고 나머지는 0이된다. 따라서 교집합 연산이 된다.

- a & ~b연산을 하게되면 a집합과 b의 여집합과 &연산을 하게된다. 즉, A - B인 차집합 연산이 된다.

- ^연산을 하게되면 둘 중 하나에만 포함된 원소들만 1로 살아남게 된다.

### 집합의 크기 구하기

집합의 크기를 구하려면, 현재 1로 켜져 있는 비트의 수를 count해야한다. 따라서, 모든 비트를 순회해야 되고 재귀적으로 다음과 같이 구현할 수 있다.

```javascript
const bitCount = (x) => {
  if (x == 0) return 0;
  return (x % 2) + bitCount(x / 2);
};
```

x % 2를 하면 마지막 비트를 얻게 되고, x / 2를 하게 되면 마지막 비트를 삭제할 수 있다. 따라서, 모든 비트를 재귀적으로 순회할 수 있다.

### 모든 부분 집합 순회하기

집합의 모든 부분 집합을 순회하는 과정도 정말 간단하게 구현할 수 있다.

```javascript
for (let subset = set; subset; subset = (subset - 1) & set) {
  // subset은 set의 부분집합 중 하나
}
```