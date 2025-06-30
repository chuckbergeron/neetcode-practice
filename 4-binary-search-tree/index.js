const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { TreeMap } = require('./treemap.js')

// const inputArray = ['insert', 1, 2, 'get', 1, 'insert', 4, 0, 'getMin', 'getMax']
const inputArray = ['insert', 1, 2, 'get', 1, 'insert', 4, 0, 'get', 4, 'insert', 3, 1, 'get', 3, 'insert', 5, 6, 'get', 5, 'getMin']
const expectedOutputArray = [null, 2, null, 0, null, 1, null, 6, 1]

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
