/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class MergeSort {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[]}
   */
  mergeSort(pairs) {
    const start = 0
    const end = pairs.length - 1

    return this.mergeSortHelper(pairs, start, end)
  }

  mergeSortHelper(pairs, start, end) {
    // Base case, array length is 1 so just return
    if (end - start + 1 <= 1) {
      return pairs
    }

    // Gotcha in interviews, summing start with end could overflow so use `s + (e - s) / 2` instead
    const middle = Math.floor(start + (end - start) / 2)
    // const middle = Math.floor((start + end) / 2)

    this.mergeSortHelper(pairs, start, middle)
    this.mergeSortHelper(pairs, middle + 1, end)

    this.merge(pairs, start, middle, end)

    return pairs
  }

  /**
   * Function to merge two sorted subarrays into one sorted array
   * @param {Pair[]} arr The array containing the subarrays to be merged
   * @param {number} start Start index of the first subarray
   * @param {number} middle End index of the first subarray and start index of the second subarray
   * @param {number} end End index of the second subarray
   */
  merge(pairs, start, middle, end) {
    const left = pairs.slice(start, middle + 1)
    const right = pairs.slice(middle + 1, end + 1)

    let i = 0 // index for left array
    let j = 0 // index for right array
    let k = start // index for resultant array

    // Merge the two sorted halfs
    // Exit after we hit the end of either array, then we can just take the leftovers
    // of the array we didn't reach the end of
    while (i < left.length && j < right.length) {
      // If left is equal or less, move it first (keeps it stable if the two values are equal)
      if (left[i].key <= right[j].key) {
        pairs[k] = left[i]
        i = i + 1
      } else {
        pairs[k] = right[j]
        j = j + 1
      }

      k += 1
    }

    // One of the halves will have elements remaining
    // Finally, take the leftovers of the array we didn't hit the end of
    while (i < left.length) {
      pairs[k] = left[i]
      i += 1
      k += 1
    }

    while (j < right.length) {
      pairs[k] = right[j]
      j += 1
      k += 1
    }
  }
}

module.exports = { MergeSort }
