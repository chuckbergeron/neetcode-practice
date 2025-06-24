class ListNode {
  /**
   * @param {number} val - Int value of node
   * @param {ListNode} [nextNode=null] - Reference to the next node
   */
  constructor(val, nextNode = null) {
    this.next = nextNode
    this.val = val
  }
}

class LinkedList {
  constructor() {
    // Initialize list with 'dummy' node, makes it easier to remove a node from
    // the beginning of the list
    // @type {ListNode}
    this.head = new ListNode(-1)
    this.tail = this.head
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let current = this.head.next
    let i = 0
    while (current) {
      if (i === index) {
        return current.val
      }
      i++
      current = current.next
    }
    // Index OOB or list is empty
    return -1
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new ListNode(val)
    newNode.next = this.head.next
    this.head.next = newNode

    if (!newNode.next) {
      // If list was empty before insertion
      this.tail = newNode
    }
    return null
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.tail.next = new ListNode(val, null)
    this.tail = this.tail.next
    return null
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0
    let current = this.head
    // let previous

    while (i < index && current) {
      // previous = current
      current = current.next
      i++
    }

    if (current && current.next) {
      if (current.next === this.tail) {
        this.tail = current
      }
      current.next = current.next.next
      return true
    } else {
      return false
    }
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let arr = []
    let current = this.head.next
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }
}

module.exports = {
  LinkedList: LinkedList
}
