// Design a Minimum Heap (aka a Priority Queue) class. Your MinHeap class should support the following operations:
//
// MinHeap() will initialize an empty minimum heap.
// void push(int val) will add val to the heap.
// int pop() will remove and return the smallest element in the heap. If the heap is empty, return -1.
// int top() will return the smallest element in the heap without removing it. If the heap is empty, return -1.
// void heapify(int[] nums) will build a minimum heap from nums.
//
// Note: push and pop should be implemented in O(logn) O(logn) time complexity, while top should be implemented
// in  O(1), and heapify should be implemented in O(n) time complexity.

/**
 * MinHeap Node
 * Represents a key/val node in the Hash Table.
 */
class Node {
  /**
   * @param {number} key - Key for the node
   * @param {number} value - Value for the node
   */
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

// Helper formulas:
//
// leftChild = 2 * i
// rightChild = 2 * i + 1
// parent = i / 2

/**
 * MinHeap Class
 * Data structure implementing the MinHeap
 */
class MinHeap {
  constructor() {
    this.heap = new Array(1).fill(null)
  }

  /**
   * @param {number} val
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  push(val) {
    this.heap.push(val)

    const getParentIndex = (currentIndex) => {
      return Math.floor(currentIndex / 2)
    }

    let currentIndex = this.heap.length - 1
    let parentIndex = getParentIndex(currentIndex)

    // "Percolate Up"
    //
    // If the value we’re inserting is smaller than the first available/open parent, get the parent and swap it
    // then compare the newly swapped node’s parent to the new value we just swapped in,
    // if it’s also smaller, swap with that parent, etc.
    while (this.heap[currentIndex] < this.heap[parentIndex]) {
      const currentValue = this.heap[currentIndex]
      const parentValue = this.heap[getParentIndex(currentIndex)]

      this.heap[getParentIndex(currentIndex)] = currentValue
      this.heap[currentIndex] = parentValue

      currentIndex = parentIndex
      parentIndex = this.heap[Math.floor(currentIndex / 2)]
    }

    return null
  }

  /**
   * @return {number}
   */
  pop() {
    // Empty? return -1
    if (this.heap.length === 1) {
      return -1
    }

    // Only 1 element? Simply pop it from the heap and return it
    if (this.heap.length === 2) {
      return this.heap.pop()
    }

    const val = this.heap[1]

    // Move the last item in the array to be the first (1th index, after the null dummy value)
    this.heap[1] = this.heap.pop()

    // "Percolate Down"
    // If the value we’re pointing at is larger than it's child we're comparing it to, swap it
    let i = 1
    console.log('')
    console.log('pop()')
    this.percolateDown(i)

    return val
  }

  /**
   * @return {number}
   */
  top() {
    if (this.heap.length === 1) {
      return -1
    }

    return this.heap[1]
  }

  /**
   * @param {number[]} array of numbers to build MinHeap from
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  heapify(array) {
    console.log('heapify()')

    if (array.length === 0) {
      throw new Error('Cannot run heapify on array of 0 length')
    }

    // Move the first element to the end of the array
    array.push(array[0])

    // Fill first slot with dummy null
    array[0] = null

    // Find the middle, we can safely ignore the second half of the array since that level
    // will have no children
    let currentIndex = Math.floor((array.length - 1) / 2)

    this.heap = array

    while (currentIndex > 0) {
      console.log('heapify while')
      this.percolateDown(currentIndex)

      currentIndex = currentIndex - 1
    }
    console.log('at the end')
    console.log(this.heap)

    return null
  }

  // "Percolate Down"
  // If the value we’re pointing at is larger than it's child we're comparing it to, swap it
  percolateDown(i) {
    while (2 * i < this.heap.length) {
      console.log('')
      console.log('')
      console.log('i')
      console.log(i)

      const leftChildIndex = 2 * i
      const rightChildIndex = 2 * i + 1

      console.log('leftChildIndex')
      console.log(leftChildIndex)
      console.log('rightChildIndex')
      console.log(rightChildIndex)

      const currentValue = this.heap[i]
      const leftChildValue = this.heap[leftChildIndex]
      const rightChildValue = this.heap[rightChildIndex]
      console.log('currentValue')
      console.log(currentValue)
      console.log('leftChildValue')
      console.log(leftChildValue)
      console.log('rightChildValue')
      console.log(rightChildValue)

      // Swap right child
      if (rightChildIndex < this.heap.length && rightChildValue < leftChildValue && currentValue > rightChildValue) {
        this.heap[i] = leftChildValue
        this.heap[2 * i] = currentValue
        i = 2 * i + 1
      } else if (currentValue > leftChildValue) {
        // Swap Left child
        this.heap[i] = rightChildValue
        this.heap[2 * i + 1] = currentValue
        i = 2 * i
      } else {
        break
      }
    }
  }
}

module.exports = {
  MinHeap
}
