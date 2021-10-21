export default {
  fn: ['checkType', 'random'],
  name: 'utils',
  author: 'HEROPY',
}
export { default as checkType } from './checkType.js'
export { default as random } from './random.js'
export { default as loadImage } from './loadImage.js'
export { default as Loader } from './loader.js'

/*
기본 내보내기
export default
- 데이터에 이름이 필요 없다.
이름을 가지는 내보내기
export
- 데이터에 이름이 있어야 한다!
*/
