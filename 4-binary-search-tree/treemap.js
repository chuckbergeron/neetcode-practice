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
        current.val = val
        return null
      }
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!this.root) {
      return -1
    }

    const found = this._find(key)

    return found ? found.val : -1
  }

  _find(key) {
    let current = this.root
    while (current !== null) {
      if (key === current.key) {
        return current
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
      return -1
    }

    const current = this.root
    const found = this._findMin(current)
    return found ? found.val : -1
  }

  _findMin(current) {
    while (current && current.left) {
      current = current.left
    }
    return current
  }

  /**
   * @returns {number}
   */
  getMax() {
    if (!this.root) {
      return -1
    }

    const current = this.root
    const found = this._findMax(current)
    return found ? found.val : -1
  }

  _findMax(current) {
    while (current && current.right) {
      current = current.right
    }
    return current
  }

  /**
   * @param {number} key
   * @returns {void}
   */
  remove(key) {
    if (!this.root) {
      return null
    }

    let current = this.root
    console.log('REMOVING')
    console.log(key)

    this.removeHelper(current, key)

    return null
  }

  removeHelper(current, key) {
    // Case 1: Leaf w/ 0 or 1 child
    if (key > current.key) {
      current.right = this.removeHelper(current.right, key)
    } else if (key < current.key) {
      current.left = this.removeHelper(current.left, key)
    } else {
      // We found the key we're trying to remove
      console.log("We found the key we're trying to remove")
      // console.log(current)
      console.log(current.key)

      if (!current.left) {
        console.log('return right')
        console.log(current.right)
        return current.right
      } else if (!current.right) {
        return current.left
      } else {
        // Case 2: Leaf w/ 2 children
        // replace node with one of it's descendants
        let minNode = this._findMin(current.right)
        current.key = minNode.key
        current.val = minNode.val
        current.right = this.removeHelper(current.right, minNode.key)
      }
    }

    return current
  }

  /**
   * @returns {number[]}
   */
  getInorderKeys() {
    if (!this.root) {
      return []
    }

    const out = []
    let current = this.root
    console.log('getInorderKeys')
    console.log(current)
    this.inorderTraversalHelper(current, out)
    return out
  }

  inorderTraversalHelper(current, out) {
    if (!current) {
      return
    }

    this.inorderTraversalHelper(current.left, out)
    out.push(current.key)
    this.inorderTraversalHelper(current.right, out)
  }
}

module.exports = { TreeMap }
