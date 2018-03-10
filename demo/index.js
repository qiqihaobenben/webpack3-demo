import dog from "dogModule";
import Stack from 'stack';
import hotPotato from 'hotPotato'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}
dog();
cat.say();
let stack = new Stack();
let names = ['zheming', 'sijie', 'chengyin', 'guangyu', 'yueying', 'xiaolujie', 'miaomiao', 'wenwu'];
let time = Math.ceil(7 * Math.random());
let winner = hotPotato(names, time);
console.log(`击鼓传花的胜者是${winner}`)
