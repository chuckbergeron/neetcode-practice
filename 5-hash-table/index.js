const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { HashTable } = require('./hashTable.js')

const inputArray = [
  'HashTable',
  8,
  'insert',
  8,
  0,
  'insert',
  16,
  0,
  'insert',
  24,
  0,
  'get',
  8,
  'get',
  16,
  'get',
  24,
  'remove',
  24,
  'get',
  24,
  'remove',
  16,
  'get',
  16,
  'remove',
  8,
  'get',
  8
]
const expectedOutputArray = [null, null, null, null, 0, 0, 0, true, -1, true, -1, true, -1]

const resultArray = executeFunctionArray(inputArray, HashTable)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
