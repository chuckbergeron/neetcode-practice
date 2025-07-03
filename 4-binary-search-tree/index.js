const { logPrimitiveArraysEqual } = require('../utils/test.js')
const { TreeMap } = require('./treemap.js')

const inputArray = ['insert', 1, 2, 'insert', 4, 2, 'remove', 1, 'get', 1]

const expectedOutputArray = [null, null, null, -1]

const resultArray = []

const treemap = new TreeMap()

// TODO: refactor this into a helper method
for (let i = 0; i < inputArray.length; i++) {
  let input = inputArray[i]

  if (typeof input === 'string') {
    let j = i + 1
    let args = []
    while (typeof inputArray[j] === 'number') {
      args.push(inputArray[j])
      j++
    }
    resultArray.push(treemap[input](...args))
  }
}

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
