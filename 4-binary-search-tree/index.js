const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { TreeMap } = require('./treemap.js')

// const inputArray = ['insert', 1, 2, 'get', 1, 'insert', 4, 0, 'getMin', 'getMax']
// const inputArray = ['insert', 1, 2, 'insert', 4, 2, 'insert', 3, 7, 'insert', 2, 1, 'getInorderKeys', 'remove', 1, 'getInorderKeys']
// const inputArray = ['insert', 1, 2, 'insert', 4, 2, 'insert', 3, 7, 'insert', 2, 1, 'get', 3]
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
