const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.rootNode = null;
    }

    root() {
      return this.rootNode;
    }

    add(data) {
      this.rootNode = this.insertNode(this.rootNode, data);
    }

    insertNode(root, data) {
      if (root === null) {
        return new Node(data);
      }

      if (data < root.data) {
        root.left = this.insertNode(root.left, data);
      } else if (data > root.data) {
        root.right = this.insertNode(root.right, data);
      }

      return root;
    }

    has(data) {
      return this.find(data) !== null;
    }

    find(data, node = this.rootNode) {
      if (node === null || node.data === data) {
        return node;
      }

      if (data < node.data) {
        return this.find(data, node.left);
      } else {
        return this.find(data, node.right);
      }
    }

    remove(data) {
      this.rootNode = this.removeNode(this.rootNode, data);
    }

    removeNode(root, data) {
      if (root === null) {
        return root;
      }

      if (data < root.data) {
        root.left = this.removeNode(root.left, data);
      } else if (data > root.data) {
        root.right = this.removeNode(root.right, data);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }

        root.data = this.min(root.right);
        root.right = this.removeNode(root.right, root.data);
      }

      return root;
    }

    min(node = this.rootNode) {
      while (node.left !== null) {
        node = node.left;
      }
      return node.data;
    }

    max(node = this.rootNode) {
      while (node.right !== null) {
        node = node.right;
      }
      return node.data;
    }
  }

  module.exports = {
    BinarySearchTree,
  };