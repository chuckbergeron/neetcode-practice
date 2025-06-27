class DequeNode {
  /**
   * @param {number} val - Int value of node
   * @param {ListNode} [prevNode=null] - Reference to the prev node
   * @param {ListNode} [nextNode=null] - Reference to the next node
   */
  constructor(val, prevNode = null, nextNode = null) {
    this.val = val
    this.prev = prevNode
    this.next = nextNode
  }
}

class Deque {
  constructor() {
    // Initialize list with 'dummy' node, makes it easier to remove a node from
    // the beginning of the list
    // @type {DequeNode}
    this.head = new DequeNode(-1)
    this.tail = this.head
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // If there is no second node (after the dummy node) then it's considered empty
    return !this.head.next
  }

  /**
   * @param {number} value
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  appendleft(val) {
    const newNode = new DequeNode(val)

    // Make the new node's `next` equal to the real starting node (not the dummy)
    newNode.next = this.head.next

    // Make the new 'real' head newNode
    this.head.next = newNode

    if (newNode.next) {
      newNode.next.prev = newNode
    } else {
      // If list was empty before insertion
      this.tail = newNode
    }

    return null
  }

  /**
   * @param {number} val
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  append(val) {
    const newNode = new DequeNode(val)

    // Make the new node the current tail node's `next`
    this.tail.next = newNode

    // Set the prev on the newNode to be the current tail
    newNode.prev = this.tail

    // Update the tail to point to the newNode
    this.tail = newNode

    return null
  }

  /**
   * @return {number}
   */
  popleft() {
    if (this.isEmpty()) {
      return -1
    }

    // Get the real first node (not the dummy)
    const firstNode = this.head.next

    // If there is a node in the 1th position, update the dummy node's `next`
    // to point to the secondNode (now the first)
    const secondNode = firstNode.next
    if (secondNode) {
      this.head.next = secondNode
      secondNode.prev = this.head
    } else {
      this.head.next = null
      this.tail = this.head
    }

    return firstNode.val
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.isEmpty()) {
      return -1
    }

    // Get the final node in the queue
    const lastNode = this.tail

    const secondLastNode = lastNode.prev
    if (secondLastNode) {
      secondLastNode.next = null
      this.tail = secondLastNode
    }

    if (lastNode == this.head.next) {
      this.head.next = null
      this.tail = null
    }

    return lastNode.val
  }
}

module.exports = {
  Deque
}
