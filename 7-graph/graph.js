// Design a directed Graph class. Your Graph class should support the following operations:

// Graph() will initialize an empty directed graph.
// void addEdge(int src, int dst) will add an edge from src to dst if it does not already exist. If either src or dst do not exist, add them to the graph.
// bool removeEdge(int src, int dst) will remove the edge from src to dst if it exists. Return whether the edge was removed. Either src or dst may not exist in the graph.
// bool hasPath(int src, int dst) will return whether there is a path from src to dst. Assume both src and dst exist in the graph.

// Constraints:

// Each vertex value will be a unique integer.
// Multiple edges from one vertex to another are not allowed.
// A vertex will not have an edge to itself, but the graph may contain a cycle.
// The graph is not necessarily connected (there may be disconnected components).

/**
 * Graph Class
 * Data structure implementing the Graph
 */
class Graph {
  // this.adjacencyList = { "val": [...neighbors...] }
  constructor() {
    this.adjacencyList = {}
  }

  /**
   * @param {number} src
   * @param {number} dst
   * @return {null} (instead of undefined, to match the contrived test case)
   */
  addEdge(src, dst) {
    if (!this.adjacencyList[src]) {
      this.adjacencyList[src] = []
    }
    if (!this.adjacencyList[dst]) {
      this.adjacencyList[dst] = []
    }

    this.adjacencyList[src] = [...this.adjacencyList[src], dst]

    return null
  }

  /**
   * @param {number} src
   * @param {number} dst
   * @return {boolean}
   */
  removeEdge(src, dst) {
    if (this.adjacencyList[src] && this.adjacencyList[src].includes(dst)) {
      const index = this.adjacencyList[src].indexOf(dst)
      this.adjacencyList[src].splice(index, 1)
      return true
    }

    return false
  }

  /**
   * @param {number} src
   * @param {number} dst
   * @return {boolean}
   */
  hasPath(src, dst) {
    if (this.adjacencyList[src]) {
      return this.hasPathHelper(src, dst)
    }

    return false
  }

  // neighbours = [1,3,4]
  /**
   * @param {number} src
   * @param {number} target
   * @return {boolean}
   */
  hasPathHelper(src, target) {
    const neighbors = this.adjacencyList[src]

    // iterate through neighbors
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]

      if (neighbor === target) {
        return true
      }

      return this.hasPathHelper(neighbor, target)
    }

    return false
  }
}

module.exports = {
  Graph
}
