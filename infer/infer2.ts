//反转数组
type Arr = [1, 2, 3, 4]
type reverse<T extends any[]> = T extends [infer U, ...infer R]
  ? [...reverse<R>, U]
  : []
type Arrb = reverse<Arr>
// type Arrb = [4, 3, 2, 1]
