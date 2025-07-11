const { executeFunctionArray, logPrimitiveArraysEqual } = require('../utils/test.js')
const { Graph } = require('./graph.js')

const inputArray = [
  'addEdge',
  42,
  43,
  'addEdge',
  43,
  44,
  'addEdge',
  43,
  45,
  'addEdge',
  44,
  46,
  'addEdge',
  45,
  46,
  'addEdge',
  44,
  47,
  'hasPath',
  42,
  47
]
const expectedOutputArray = [null, null, null, null, null, null, true]

const resultArray = executeFunctionArray(inputArray, Graph)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
