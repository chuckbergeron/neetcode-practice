const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { LinkedList } = require('./linkedList.js')

const inputArray = ['insertHead', 1, 'insertTail', 2, 'insertHead', 0, 'remove', 1, 'getValues']

let expectedOutputArray = [null, null, null, true, [0, 2]]
let resultArray = []

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
    resultArray.push(list[input](...args))
  }
}

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
