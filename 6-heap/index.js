const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { MinHeap } = require('./minHeap.js')

const inputArray = ['push', 55, 'push', 3, 'push', 16, 'push', 4, 'top', 'pop']
// const inputArray = ['heapify', [1, 2, 3, 4, 5], 'pop', 'pop', 'pop', 'pop', 'pop']
const expectedOutputArray = [null, 1, 2, 3, 4, 5]

const resultArray = executeFunctionArray(inputArray, MinHeap)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
