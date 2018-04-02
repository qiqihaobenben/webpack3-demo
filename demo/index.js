import dog from "dogModule";
import Stack from 'stack';
import hotPotato from 'hotPotato'
import LinkedList from 'linkedList'
import HashTable from 'hashTable'
import Graph from 'graph'
import BinarySearchTree from 'binary-search-tree'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}

let graph = new Graph();
let myVertices = ['A','B','C','D','E'];
for(var i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i])
}
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','E')
graph.addEdge('B','E')
console.log(graph.toString())

