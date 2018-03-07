import dog from "dogModule";
import Stack from 'stack';
import Queue from 'priority-queue'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}
dog();
cat.say();
let stack = new Stack();
let queue = new Priorityqueue();
console.log(queue.isEmpty()) //true
queue.enqueue('fangxu',2)
queue.enqueue('wenqi',1)
queue.enqueue('benben',1)
queue.print() //'wenqi-1', 'benben-1','fangxu-2'
console.log(queue.size()) //3
console.log(queue.isEmpty()) // fasle
queue.dequeue()
queue.dequeue()
queue.print() //'fangxu-2'
