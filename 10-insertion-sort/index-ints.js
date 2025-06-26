const { logPrimitiveArraysEqual } = require('../utils/utils.js')

const inputArray = [2, 3, 4, 1, 6]
const expectedOutputArray = [1, 2, 3, 4, 6]

/**
 * Sort input array using Insertion Sort method
 *
 * Worst case: O(n²) (every element to be sorted)
 * Best case: O(n) (already sorted)
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    while (j >= 0 && arr[j + 1] < arr[j]) {
      const tmp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = tmp
      j = j - 1
    }
  }

  return arr
}

// Function modifies the input array, do not need assignment here
insertionSort(inputArray)

logPrimitiveArraysEqual(expectedOutputArray, inputArray)
