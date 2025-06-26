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
const insertionSort = (arrayOfPairs) => {
  let outArray = []

  for (let i = 0; i < arrayOfPairs.length; i++) {
    let j = i - 1
    while (j >= 0 && arrayOfPairs[j + 1].key < arrayOfPairs[j].key) {
      const tmp = arrayOfPairs[j]
      arrayOfPairs[j] = arrayOfPairs[j + 1]
      arrayOfPairs[j + 1] = tmp
      j = j - 1
    }

    outArray = [...outArray, [...arrayOfPairs]]
  }

  return outArray
}

// Function modifies the input array, do not need assignment here
const resultArray = insertionSort(inputArray)

function primitiveArraysAreEqualJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

if (!primitiveArraysAreEqualJSON(expectedOutputArray, resultArray)) {
  console.log('')
  console.error('Fail :(')
  console.log('')
  console.log(`Test's expected output:`)
  console.log(expectedOutputArray)
  console.log('')
  console.log(`Does not match your output:`)
  console.log(resultArray)
  console.log('')
} else {
  console.log('')
  console.log('\x1b[32m%s\x1b[0m', 'Pass!')
  console.log('')
  console.log(`Test's expected output:`)
  console.log(expectedOutputArray)
  console.log('')
  console.log('Your output:')
  console.log(resultArray)
  console.log('')
}
