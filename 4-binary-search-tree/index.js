const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { Treemap } = require('./treemap.js')

const inputArray = ['insert', 1, 2, 'get', 1, 'insert', 4, 0, 'getMin', 'getMax']
const expectedOutputArray = [null, 2, null, 2, 0]

const resultArray = []

const treemap = new Treemap()

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
