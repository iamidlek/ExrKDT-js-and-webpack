export default function (data, typeName) {
  return Object.prototype.toString.call(data).slice(8, -1) === typeName
}
