import dog from "dogModule";
import Stack from 'stack';
import hotPotato from 'hotPotato'
import LinkedList from 'linkedList'
import HashTable from 'hashTable'
import BinarySearchTree from 'binary-search-tree'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}

let tree = new BinarySearchTree();
tree.insert(11)
tree.insert(9)
tree.insert(15)
tree.insert(24)
tree.insert(7)
tree.insert(13)
tree.insert(3)
tree.insert(8)

tree.inOrderTraverse(function (value){
    console.log(value)
})
// 3,7,8,9,11,13,15,24

tree.preOrderTraverse(function (value) {
    console.log(value)
})
// 11,9,7,3,8,15,13,24

tree.postOrderTraverse(function (value){
    console.log(value)
})
// 3,8,7,9,13,24,15,11

let min = tree.min();
console.log(min) // 3

let max = tree.max();
console.log(max) // 24

console.log(tree.search(1)) //false 节点中没有1
console.log(tree.search(15)) //true 节点中没有15

tree.remove(24);
tree.remove(7);
tree.inOrderTraverse(function (value){
    console.log(value)
})
// 3,8,9,11,13,15