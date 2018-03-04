import dog from "dogModule";
import Stack from 'stack';
import Queue from 'queue'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}
dog();
cat.say();
let stack = new Stack();
let queue = new Queue();
console.log(queue.isEmpty()) //true
queue.enqueue('fangxu')
queue.enqueue('wenqi')
queue.enqueue('benben')
queue.print() //'fangxu', 'wenqi', 'benben'
console.log(queue.size()) //3
console.log(queue.isEmpty()) // fasle
queue.dequeue()
queue.dequeue()
queue.print() //'benben'
