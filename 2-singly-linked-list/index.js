const { LinkedList } = require('./linkedList.js')

const inputArray = ['insertHead', 1, 'insertTail', 2, 'insertHead', 0, 'remove', 1, 'getValues']

let outputArray = [null, null, null, true, [0, 2]]
let actualArray = []

let list = new LinkedList()

for (let i = 0; i < inputArray.length; i++) {
  let input = inputArray[i]

  if (typeof input === 'string') {
    let j = i + 1
    let args = []
    while (typeof inputArray[j] === 'number') {
      args.push(inputArray[j])
      j++
    }
    actualArray.push(list[input](...args))
  }
}

function primitiveArraysAreEqualJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

console.log(primitiveArraysAreEqualJSON(outputArray, actualArray))
