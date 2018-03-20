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

hash.print()
