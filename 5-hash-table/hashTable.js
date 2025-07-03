// Design a Hash Table class. Your HashTable class should support the following operations:
//
// HashTable(int capacity) will initialize an empty hash table with a capacity of capacity, where capacity > 1.
// int get(int key) will return the value associated with the key. If the key is not present in the hash table, return -1.
// void insert(int key, int value) will insert the key-value pair into the hash table. If the key is already present in the hash table, the original value should be replaced with the new value.
// bool remove(int key) will remove the key-value pair with the given key. If the key is not present, return false, otherwise return true
// int getSize() will return the number of keys in the hash table.
// int getCapacity() will return the capacity of the hash table.
// void resize() will double the capacity of the hash table. This method should be called automatically when the load factor reaches or exceeds 0.5. Your insert method should automatically call resize() when necessary.
//
// Note: You can choose how to handle collisions.

/**
 * HashTable Node
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

/**
 * HashTable (HashMap) Class
 * Data structure implementing the Hash Table (HashMap)
 */
class HashTable {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error('capacity argument must be a positive integer')
    }
    this.size = 0
    this.capacity = capacity
    this.table = new Array(this.capacity).fill(null)
  }

  /**
   * @param {number} key
   * @return {number} number of the index to use
   */
  hash(key) {
    return key % this.capacity
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  insert(key, value) {
    if (key === undefined || value === undefined) {
      console.error('Argument error, cannot insert undefined key or value')
      throw new Error('Argument Error')
    }

    // 1. Insert
    let index = this.hash(key)

    // Open Addressing:
    // Loop through records in the array until we find an existing entry key that matches or
    // an empty slot to fill in
    while (true) {
      // 1. Found an empty slot to use, insert new node
      if (this.table[index] === null) {
        const newNode = new Node(key, value)
        this.table[index] = newNode

        this.size += 1

        // Optionally rehash / resize if the HashTable's load is greater than or equal to 50%
        if (this.size >= Math.floor(this.capacity / 2)) {
          this.resize()
        }

        return null
      }

      // 2. Found existing, update it
      if (this.table[index].key === key) {
        this.table[index].value = value
        return null
      }

      index += 1
      index = index % this.capacity
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    let index = this.hash(key)

    // Open Addressing:
    // Loop through records in the array until we find an existing entry key that matches or
    // an empty slot to fill in
    while (true) {
      // 1. Found empty slot, return -1
      if (this.table[index] === null) {
        return -1
      }

      // 2. Found existing, return it
      if (this.table[index] && this.table[index].key === key) {
        return this.table[index].value
      }

      // 3. Found record but not the one we were looking for, move on to next slot
      if (this.table[index].key !== key) {
        index += 1
        index = index % this.capacity
      }
    }
  }

  /**
   * @param {number} key
   * @returns {boolean}
   */
  remove(key) {
    let index = this.hash(key)

    while (true) {
      // 1. Found empty slot, return false
      if (this.table[index] === null) {
        return false
      }

      // 2. Found record but not the one we were looking for, move on to next slot
      if (this.table[index].key !== key) {
        index += 1
        index = index % this.capacity
      }

      // 2. Found existing, return it
      if (this.table[index].key === key) {
        this.table[index] = null
        this.size -= 1
        return true
      }
    }
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.size
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity
  }

  /**
   * @return {void}
   */
  resize() {
    this.capacity = 2 * this.capacity

    const oldTable = this.table

    const newTable = new Array(this.capacity).fill(null)
    this.table = newTable
    this.size = 0

    for (let node of oldTable) {
      if (node) {
        this.insert(node.key, node.value)
      }
    }
  }
}

module.exports = {
  HashTable
}
