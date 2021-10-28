# webpack 환경 설정 순서

```bash
npm i -D webpack webpack-cli webpack-dev-server
```

> !! package.json의 "scripts" 설정  
> webpack.config.js 생성 및 설정

```bash
npm i -D html-webpack-plugin
```

> npm dev run 확인 완료


```bash
npm i -D copy-webpack-plugin
```

> patterns-from static 으로 웹팩 설정
> static 폴더의 정적 파일을 dist 폴더에 복사해서 온다
> static/favicon.ico 는 자동으로 등록된다

```bash
npm i -D css-loader style-loader
```
```bash
npm i -D sass-loader sass
```
```bash
npm i -D postcss autoprefixer postcss-loader
```

> !! package.json의 "browserslist" 설정  
> postcss.config.js 생성  
> flex =>  -ms-flexbox 확인 완료

```bash
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime-corejs3
```
```bash
npm i -D babel-loader
```

> babel.config.json 및 webpack rules 설정

```bash
npm i -D eslint @babel/eslint-parser
```

> 에러 옵션 설정 후 검사, 자동수정 확인 완료  
> preferences > setting > format > format on save

```text
공식 문서 상에는 이하의 내용도 있다
npm i -D @babel/eslint-plugin

eslintrc 
"plugins": ["@babel"], 

도 필요하다고 되어있음
(설치 하지 않아도 동작함)
```

## Vue 프로젝트

```bash
npm i vue@next
```

```bash
npm i -D @vue/compiler-sfc
```

> 싱글 파일 컴포넌트를 컴파일 할 수 있게 해줌 (컴포넌트별 vue 파일로 관리)

```bash
npm i -D vue-loader@next
```

> rules, plugins, resolve-extensions 등 webpack 설정  
> npm i -D vue-loader@16 버전으로 고정해도 좋다

```bash
npm i -D vue-style-loader
```

> style-loader를 포함하고 있기 때문에 대체하여 rules에 설정한다

### eslintrc ES에 관하여

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parser": "@babel/eslint-parser",
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
} 
```

- es6(|| es2015) => arrows, classes, template strings, 
       destructuring, promises ...

> 안먹음 ES7(2016) => Array.prototype.includes(), **

- es2017(~~ES8~~) => async await, Object.values(), Object.entries()...

> 안먹음 ES9(2018) => Rest/Spread Propertie, Promise.finally() ...

> 안먹음 ES10(2019) => Array. Flat () and Array flatMap () ...

- es2020(~~ES11~~) => Nullish Coalescing Operator, Optional chaining ...

- es2021(~~ES12~~) => replaceAll, Promise.any, Numeric separators ...


### 강의 추가 내용
```bash
npm i -D @babel/cli
```
```json
{
"scripts": {
    "babel": "babel src/main.js --out-dir dist"
  },
}
```

- 변환 되는지 확인용

```bash
npm i -D @babel/plugin-transform-block-scoping
npm i -D @babel/plugin-transform-arrow-functions
npm i -D @babel/plugin-transform-classes
```
```json
{
  "plugins": [
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-classes",
  ]
}
 
// const 가 var 로 바뀜
// 화살표 함수
// 클래스가 변하는것
```

```json
// 위의 설정들 대부분이 들어있는 것
{
  "presets": ["@babel/preset-env"],
}
```

-------

### 내부 core js

- @babel/plugin-transform-runtime
  - 밑의 것을 등록하기 위한 플러그인
  - 변환하는 과정에서 폴리필(예전 버전으로 바꿀 때)  
  helper함수를 이용해서 중복되는 코드를 최대로 줄임(재사용성 up)
- @babel/runtime-corejs3
  - includes 같은 문법 이해 가능

```json
// 내부적으로 corejs 2 가 기본
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```

### ssas란

```text
preprocessor
css전처리기
css가 동작하기 전에 변환

postcss란
후처리기
css 완성된후 기는중 하나인 autoprefixer로 붙여줌
```

### loader란

-  webpack과 패키지 간의 중간 전달 역할
