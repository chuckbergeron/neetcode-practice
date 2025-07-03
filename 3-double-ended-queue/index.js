const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { Deque } = require('./deque.js')

const testCaseArray2 = ['appendleft', 1, 'appendleft', 2, 'pop', 'pop']
const inputArray = testCaseArray2

const testResultArray2 = [null, null, 1, 2]

const expectedOutputArray = testResultArray2
const resultArray = executeFunctionArray(inputArray, Deque)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
