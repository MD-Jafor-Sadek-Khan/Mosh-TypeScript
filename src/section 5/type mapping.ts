interface Product11 {
  name: string
  price: number
}

type Readonly2<T> = {
  readonly [K in keyof T]: T[K]
}

let test11: Readonly2<Product11> = {
  name: "hat",
  price: 10,
}
