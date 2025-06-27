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

  //     5
  //   3   6
  //  2,4
  //
  // inserting a 1
  /**
   * @param {number} key
   * @param {number} val
   * @returns {void}
   */
  insert(key, val) {
    if (!this.root) {
      this.root = new TreeNode(key, val)
    } else {
      const current = this.root
      this._insertHelper(current, key, val)
    }

    return null
  }

  _insertHelper(current, key, val) {
    if (key < current.key) {
      // traverse left
      while (current.left) {
        this._insertHelper(current, key, val)
      }
      current.left = new TreeNode(key, val)
    } else if (key > current.key) {
      // traverse right
      while (current.right) {
        this._insertHelper(current, key, val)
      }
      current.right = new TreeNode(key, val)
    } else {
      return null
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {}

  /**
   * @returns {number}
   */
  getMin() {}

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
