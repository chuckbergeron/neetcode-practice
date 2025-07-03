const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')

const { TreeMap } = require('./treemap.js')

const inputArray = ['insert', 1, 2, 'insert', 4, 2, 'remove', 1, 'get', 1]

const expectedOutputArray = [null, null, null, -1]

const resultArray = executeFunctionArray(inputArray, TreeMap)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
