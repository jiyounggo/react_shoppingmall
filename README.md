#  미니 쇼핑몰

## 프로젝트 소개

- 리액트를 이용한 미니 쇼핑몰 기능 구현



## 실행 방법

```

 $ npm i
 $ npm start

```

<br>

## 프로젝트 소개
$
$

```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.js
 ┣ 📂components
 ┃ ┣ 📜NoResult.jsx
 ┃ ┣ 📜Results.jsx
 ┃ ┣ 📜Results.style.js
 ┃ ┣ 📜Search.jsx
 ┃ ┗ 📜Search.style.js
 ┣ 📂hooks
 ┃ ┗ 📜useKeyUpDown.js
 ┣ 📂util
 ┃ ┣ 📜boldText.js
 ┃ ┗ 📜constant.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┗ 📜index.js


```

</details>

<br>

---

<br>

## 프로젝트 기능 구현

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- 검색어가 없을 시 “검색어 없음” 표출
- API 호출별로 캐싱 기능을 제공하는 라이브러리 사용하지 않고 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이도록 구현
  - API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br>

<br>

## 프로젝트 설명

<br>

### 기술 스택

- React
- styled-components

<br>

<br>

### 😸 **Best Practice**

1. 캐싱을 구현한 방법

- useState를 이용하여 state에 키-값 의 오브젝트 형태로 검색어-검색결과 를 저장한다. 새로운 검색어를 입력하면 이전 state값은 스프레드 연산자를 이용해 state에 남겨놓고, 새로운 state를 누적시킨다.
- 검색어를 입력받고, 그 검색어가 이미 state에 있는 키값의 검색어라면 return하여 api를 호출하지 않고 캐시되어있는 데이터 값을 보여준다.

2. API 호출 횟수를 줄이는 전략

- 사용자가 검색어 입력할 때마다 0.5초 후에 기능을 실행하도록 타이머를 설정하고, 다음 문자를 입력하면 이전에 설정한 타이머가 취소되고 새 타이머가 세팅된다. 이런 식으로 사용자의 연속 입력이 종료된 후 0.5초 후에 API호출이 되기 때문에 API호출 횟수가 줄어들수 있다.

3. 키보드만으로 추천 검색어들로 이동

- 관심사 분리를 위해 키 조작 logic을 hook으로 분리했다. useKeyUpDown hook을 생성, 그 안에서 keydown handler를 생성하고, 보여줄 리스트의 index state를 관리한다.
