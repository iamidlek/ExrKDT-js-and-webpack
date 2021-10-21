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
