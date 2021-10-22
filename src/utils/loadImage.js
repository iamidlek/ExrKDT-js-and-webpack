export default function (url) {
  return new Promise((resolve) => {
    const img = document.createElement('img')
    img.src = url
    //document.body.append(img);
    img.addEventListener('load', () => {
      resolve()
    })
  })
}
