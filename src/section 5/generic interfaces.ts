interface Result<T> {
  data: T | null
  error: string | null
}

function fetch<T>(url: string): Result<T> {
  url
  return { data: null, error: null }
}

interface Product {
  productName: string
}

interface User2 {
  userName: string
}
const test = fetch<User2>("url")

console.log(test.data?.userName)

const test2 = fetch<Product>("url")

console.log(test2.data?.productName)
