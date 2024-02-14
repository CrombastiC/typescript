// type R<T> = { readonly [P in keyof T]: T[P] }
// type key = 'name' | 'age' | 'text'

type Rec<K extends keyof any, T> = {
  [P in K]: T
}
type key = string | number | symbol
type Person = {
  name: string
  age: number
  text: string
}
type k = 'S' | 'T' | 'U'
//
type B = Rec<k, Person>

let obj: B = {
  S: {
    name: '小李',
    age: 18,
    text: 'hello',
  },
  T: {
    name: '小王',
    age: 11,
    text: 'world',
  },
  U: {
    name: '小刘',
    age: 14,
    text: 'say',
  },
}
// type Man = R<Person>
