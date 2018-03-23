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

  // 搜索最小值
  this.min = function () {
    var minNode = function(node){
      if(node){
        while(node && node.left !== null) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    }
    return minNode(root);
  }

  // 搜索最大值
  this.max = function () {
    var maxNode = function(node) {
      if(node) {
        while(node && node.right !== null) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    }
    return maxNode(root);
  }

  // 找一个特定的值，然后存在返回true，不存在返回false
  this.search = function (key) {
    var searchNode = function (node,key) {
      if(node === null) {
        return false;
      }
      if(key < node.key) {
        searchNode(node.left, key)
      }else if(key > node.key) {
        searchNode(node.right, key)
      }else {
        return true;
      }
    }
    return searchNode(root, key)
  }

  // 移除一个节点
  this.remove = function (key) {
    var removeNode = function (node, key) {
      if(node === null) {
        return null;
      }
      if(key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
      }else if(key > node.key) {
        node.right = removeNode(node.right,key);
        return node;
      }else { // 键等于node.key
        // 第一种情况，一个叶节点
        if(node.left === null && node.right === null) {
          node = null;
          return node;
        }

        // 第二种情况，一个只有一个子节点的节点
        if(node.left === null) {
          node = node.right;
          return node;
        }
        if(node.right === null) {
          node = node.left;
          return node;
        }

        // 第三种情况,一个有两个子节点的节点（最难想的）

        function findMinNode(node) { //获取最小节点
          while(node && node.left !== null) {
            node = node.left;
          }
          return node;
        }
        // 找到需要移除的节点后，发现有左右两个子节点，那就去找右侧节点下面最小的节点，这个节点一定比要移除的那个节点左侧的节点大，比右侧的节点小（与右侧最小的相等）
        var aux = findMinNode(node.right); 
        // 把右侧这个最小的节点的key赋值给要移除的节点，通过这一步，我们就改变了要移除节点的值，也就是说这个节点被移除了。
        node.key = aux.key;
        // 上一步造成了
        node.right = removeNode(node.right, aux.key);
        return node;
      }

    }
  }
}