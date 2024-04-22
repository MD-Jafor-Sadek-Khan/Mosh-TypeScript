class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair = new KeyValuePair<string, boolean>("2", false)
const pair2 = new KeyValuePair("1", 2)
