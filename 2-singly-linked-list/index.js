const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { LinkedList } = require('./linkedList.js')

const inputArray = ['insertHead', 1, 'insertTail', 2, 'insertHead', 0, 'remove', 1, 'getValues']
const expectedOutputArray = [null, null, null, true, [0, 2]]

const resultArray = executeFunctionArray(inputArray, LinkedList)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
