const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { HashTable } = require('./hashTable.js')

const inputArray = [
  'HashTable',
  2,
  'getCapacity',
  'insert',
  6,
  7,
  'getCapacity',
  'insert',
  1,
  2,
  'getCapacity',
  'insert',
  3,
  4,
  'getCapacity',
  'getSize'
]
const expectedOutputArray = [2, null, 4, null, 8, null, 8, 3]

const resultArray = executeFunctionArray(inputArray, HashTable)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
