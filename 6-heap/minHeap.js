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
      const valueToSwap = this.heap[currentIndex]
      const parentValue = this.heap[getParentIndex(currentIndex)]

      this.heap[getParentIndex(currentIndex)] = valueToSwap
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

    const val = this.heap[this.heap.length - 1]

    // Move the last item in the array to be the first (1th index, after the null dummy value)
    this.heap[this.heap.length - 1] = this.heap.pop()

    console.log(this.heap)

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
    return null
  }
}

module.exports = {
  MinHeap
}
