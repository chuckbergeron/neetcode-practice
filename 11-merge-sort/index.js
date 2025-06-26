const { logPrimitiveArraysEqual } = require('../utils/utils.js')
const { Pair } = require('./pair.js')

const inputArray = [new Pair(5, 'apple'), new Pair(2, 'banana'), new Pair(9, 'cherry'), new Pair(1, 'date'), new Pair(9, 'elderberry')]
const expectedOutputArray = [
  new Pair(1, 'date'),
  new Pair(2, 'banana'),
  new Pair(5, 'apple'),
  new Pair(9, 'cherry'),
  new Pair(9, 'elderberry')
]

/**
 * Sort input array using Merge Sort method
 *
 * Worst case:
 * Best case:
 *
 * @param {int[]} inputArray
 * @returns {int[]}
 */
const mergeSort = (pairs) => {
  const start = 0
  const end = pairs.length - 1

  return mergeSortHelper(pairs, start, end)
}

const mergeSortHelper = (pairs, start, end) => {
  console.log('start,', start, 'end,', end)

  // Base case, array length is 1 so just return
  if (end - start + 1 <= 1) {
    return pairs
  }

  const middle = Math.floor((start + end) / 2)

  mergeSort(pairs, start, middle)
  mergeSort(pairs, middle + 1, end)

  merge(pairs, start, middle, end)

  return pairs
}

// Merges two subarrays
// First subarray is pairs[start..middle]
// Second subarray is pairs[middle+1..end]
function merge(pairs, start, middle, end) {
  console.log(pairs, start, middle, end)
}

const resultArray = mergeSort(inputArray)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
