// TreeMap() will initialize an binary search tree map.
// void insert(int key, int val) will map the key to the value and insert it into the tree.
// int get(int key) will return the value mapped with the key. If the key is not present in the tree, return -1.
// int getMin() will return the value mapped to the smallest key in the tree. If the tree is empty, return -1.
// int getMax() will return the value mapped to the largest key in the tree. If the tree is empty, return -1.
// void remove(int key) will remove the key-value pair with the given key from the tree.
// int[] getInorderKeys() will return an array of the keys in the tree in ascending order.

// The tree should not contain duplicate keys.
// If the key is already present in the tree,
// the original key-value pair should be overridden with the new key-value pair.

/**
 * TreeNode Class
 * Represents a node in the binary search tree.
 */
class TreeNode {
  /**
   * @constructor
   * @param {number} key - The key used to identify the node.
   * @param {number} val - The value associated with the key.
   */
  constructor(key, val) {
    this.key = key
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * TreeMap Class
 * Data structure implementing the binary search tree.
 */
class TreeMap {
  constructor() {
    this.root = null
  }

  //     1
  //      4
  //
  //
  // inserting a 4
  /**
   * @param {number} key
   * @param {number} val
   * @returns {void}
   */
  insert(key, val) {
    const newNode = new TreeNode(key, val)

    if (!this.root) {
      this.root = newNode
      return null
    }

    let current = this.root
    while (true) {
      if (key < current.key) {
        // traverse left
        if (!current.left) {
          current.left = newNode
          return null
        }

        current = current.left
      } else if (key > current.key) {
        // traverse right
        if (!current.right) {
          current.right = newNode
          return null
        }

        current = current.right
      } else {
        // Overwrite existing
        console.warn('overwriting existing !')
        current.val = val
        return null
      }
    }
  }

  /**
   *  2. If we could not find the key
   *  3. If we did find the key
   *
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!this.root) {
      console.warn('TreeMap is currently empty')
      return -1
    }

    let current = this.root
    while (current !== null) {
      if (key === current.key) {
        const GREEN_CONSOLE_LOG_STRING = '\x1b[32m%s\x1b[0m'
        return current.val
      }

      if (key < current.key) {
        current = current.left
      } else if (key > current.key) {
        current = current.right
      }
    }

    // The key was not found
    return -1
  }

  /**
   * @returns {number}
   */
  getMin() {
    if (!this.root) {
      console.warn('TreeMap is currently empty')
      return -1
    }

    let current = this.root
    while (current !== null) {
      if (current.left) {
        current = current.left
      } else if (current.right) {
        current = current.right
      } else {
        return current.val
      }
    }
  }

  /**
   * @returns {number}
   */
  getMax() {}

  /**
   * @param {number} key
   * @returns {void}
   */
  remove(key) {}

  /**
   * @returns {number[]}
   */
  getInorderKeys() {}
}

module.exports = { TreeMap }
