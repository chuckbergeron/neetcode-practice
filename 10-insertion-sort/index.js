const { logPrimitiveArraysEqual } = require('../utils/test.js')
const { Pair } = require('./pair.js')

const inputArray = [new Pair(3, 'cat'), new Pair(3, 'bird'), new Pair(2, 'dog')]

// In this example, you can observe that the pairs with key=3 ("cat" and "bird") maintain
// their relative order, illustrating the stability of the Insertion Sort algorithm.
//
const expectedOutputArray = [
  [new Pair(3, 'cat'), new Pair(3, 'bird'), new Pair(2, 'dog')],
  [new Pair(3, 'cat'), new Pair(3, 'bird'), new Pair(2, 'dog')],
  [new Pair(2, 'dog'), new Pair(3, 'cat'), new Pair(3, 'bird')]
]

/**
 * Sort input array using Insertion Sort method
 *
 * Notice that the output shows the state of the array after each insertion.
 * The last state is the final sorted array. There should be pairs.length states in total.
 *
 * Worst case: O(n²) (every element to be sorted)
 * Best case: O(n) (already sorted)
 *
 * @param {Pair[]} pairs
 * @returns {Pair[][]}
 */
const insertionSort = (pairs) => {
  let outArray = []

  for (let i = 0; i < pairs.length; i++) {
    let j = i - 1
    while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
      const tmp = pairs[j]
      pairs[j] = pairs[j + 1]
      pairs[j + 1] = tmp
      j = j - 1
    }

    outArray = [...outArray, [...pairs]]
  }

  return outArray
}

const resultArray = insertionSort(inputArray)

logPrimitiveArraysEqual(expectedOutputArray, resultArray)
