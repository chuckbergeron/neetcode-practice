const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { Graph } = require('./graph.js')

const inputArray = ['addEdge', 1, 2, 'addEdge', 2, 3, 'hasPath', 1, 3, 'hasPath', 3, 1, 'removeEdge', 1, 2, 'hasPath', 1, 3]
const expectedOutputArray = [null, null, true, false, true, false]

const resultArray = executeFunctionArray(inputArray, Graph)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
