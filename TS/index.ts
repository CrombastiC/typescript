// 例子 实现代码雨
// let canvas: HTMLCanvasElement = document.querySelector('canvas')
// let ctx = canvas.getContext('2d')
// canvas.width = screen.availWidth
// canvas.height = screen.availHeight
// let str: string[] = 'SHXabcS0101010'.split('')
// let arr = Array(Math.ceil(canvas.width / 10)).fill(0)
// const rain = () => {
//   ctx.fillStyle = 'rgba(0,0,0,0.05)'
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//   ctx.fillStyle = '#0f0'
//   arr.forEach((item, index) => {
//     ctx.fillText(
//       str[Math.floor(Math.random() * str.length)],
//       index * 10,
//       item * 10
//     )
//     arr[index] =
//       item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10
//   })
// }
// setInterval(rain, 40)
