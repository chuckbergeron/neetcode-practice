const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { MinHeap } = require('./minHeap.js')

// const inputArray = ['push', 55, 'push', 10, 'push', 46, 'push', 22, 'top', 'pop']
const inputArray = ['heapify', [1, 2, 3, 4, 5], 'pop', 'pop', 'pop', 'pop', 'pop']
const expectedOutputArray = [null, 1, 2, 3, 4, 5]

const resultArray = executeFunctionArray(inputArray, MinHeap)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
