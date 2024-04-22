class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value]
  }
}

const testVal = ArrayUtils.wrapInArray(125)
const testVal2 = ArrayUtils.wrapInArray("125")
console.log(testVal, testVal2)
