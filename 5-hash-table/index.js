const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { HashTable } = require('./hashTable.js')

const inputArray = ['HashTable', 4, 'insert', 1, 2, 'get', 1, 'insert', 1, 3, 'get', 1, 'remove', 1, 'get', 1]
const expectedOutputArray = [null, 2, null, 3, true, -1]

const resultArray = executeFunctionArray(inputArray, HashTable)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
