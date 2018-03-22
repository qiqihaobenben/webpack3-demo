function BinarySearchTree() {
  // 跟链表相似，也需要声明一个Node类来表示树中的节点，每个节点有两个指针， 一个指向左侧节点，一个指向右侧节点
  // 跟双向链表的区别是，双向链表的每个节点包含的两个指针，一个指向下一个节点，另一个指向上一个节点
  function Node(key) {
    // 键是树相关术语中对节点的称呼
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 树的根元素
  var root = null;

  // 向树中插入一个新的键
  this.insert = function (key) {
    var newNode = new Node(key);
    var insetNode = function (node, newNode) {
      if(newNode.key < node.key){
        if(node.left === null) {
          node.left = newNode;
        }else {
          insertNode(node.left, newNode)
        }
      }else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if(root === null) {
      root = newNode;
    }else {
      // 将节点插在一个非根节点的其他位置，需要一个私有的辅助函数
      insertNode(root, newNode)
    }
  }

  // 树的遍历有三种，中序，先序，后序
  // 中序遍历：一种以上行顺序访问BST所有节点的遍历方式，也就是以从小到大的顺序访问所有节点。
  this.inOrderTraverse = function (callback) {
    var inOrderTraverseNode(node, callback) {
      if(node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    };
    inOrderTraverse(root, callback)
  }

  // 先序遍历：以优先于后代节点的顺序访问每个节点。
  this.preOrderTraverse = function (callback) {
    var preOrderTraverseNode = function (node, callback) {
      if(node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(root, callback)
  }

  // 后序遍历： 后序遍历先访问节点的后代节点，再访问节点本身。
  this.postOrderTraverse = function (callback){
    var postOrderTraverseNode = function (node, callback){
      if(node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraverseNode(root, callback)
  }
}