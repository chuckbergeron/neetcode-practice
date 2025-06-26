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

function primitiveArraysAreEqualJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

const resultArray = inputArray
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
