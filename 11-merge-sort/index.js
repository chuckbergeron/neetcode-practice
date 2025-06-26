const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { Pair } = require('./pair.js')
const { MergeSort } = require('./mergeSort.js')

const inputArray = [new Pair(5, 'apple'), new Pair(2, 'banana'), new Pair(9, 'cherry'), new Pair(1, 'date'), new Pair(9, 'elderberry')]
const expectedOutputArray = [
  new Pair(1, 'date'),
  new Pair(2, 'banana'),
  new Pair(5, 'apple'),
  new Pair(9, 'cherry'),
  new Pair(9, 'elderberry')
]

const resultArray = new MergeSort().mergeSort(inputArray)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
