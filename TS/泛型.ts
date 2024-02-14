// //动态类型

// // function xiaoli(a: number, b: number): Array<number> {
// //   return [a, b]
// // }

// // function xiaoli<T>(a: T, b: T): Array<T> {
// //   return [a, b]
// // }
// // //number
// // xiaoli(1, 2)
// // xiaoli(false, true)
// // xiaoli('1', '2')

// // type A<T> = string | number | T
// // let a: A<null> =null

// // interface Data<T> {
// //   msg: T
// // }
// // let date: Data<string> = {
// //   msg: '1',
// // }

// // function add<T = number, K = boolean>(a: T, b: K): Array<T | K> {
// //   return [a, b]
// // }
// // add(false, 'a')

// const axios = {
//   get<T>(url: string): Promise<T> {
//     return new Promise((resolve, rejects) => {
//       let xhr: XMLHttpRequest = new XMLHttpRequest()
//       xhr.open('GET', url)
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText))
//         }
//       }
//       xhr.send(null)
//     })
//   },
// }

// interface Data {
//   code: number
//   message: string
// }
// axios.get<Data>('./data.json').then((res) => {
//   console.log(res)
// })
