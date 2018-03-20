import dog from "dogModule";
import Stack from 'stack';
import hotPotato from 'hotPotato'
import LinkedList from 'linkedList'
import HashTable from 'hashTable'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}
dog();
cat.say();

var hash = new HashTable();
hash.put('fangxu','fangxu@email.com')
hash.put('wenting','wenting@email.com')
hash.put('yanqing','yanqing@email.com')
hash.put('xufang', 'xufang@email.com')
hash.put('tingwen', 'tingwen@email.com')
// 因为在put方法中我们打印了位置和值
// 20--fangxu@email.com
// 24--wenting@email.com
// 19--yanqing@email.com

console.log(hash.get('yanqing')) // undefined
hash.print()
