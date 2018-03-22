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
  // 中序遍历
  this.inOrderTraverse = function (callback) {

  }
}