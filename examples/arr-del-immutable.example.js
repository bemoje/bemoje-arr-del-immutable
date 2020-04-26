import arrDelImmutable from '../src/arr-del-immutable'

const arr = [1, 2]
const newArr = arrDelImmutable(arr, 1)

arr === newArr
//=> false

arr
//=> [1, 2]

newArr
//=> [2]
