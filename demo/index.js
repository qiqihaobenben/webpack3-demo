import dog from "dogModule";
import Stack from 'stack';
import hotPotato from 'hotPotato'
import LinkedList from 'linkedList'
import {animal as cat} from "@@/animal";
import 'style/index.css';

if(module.hot) {
    module.hot.accept()
}
dog();
cat.say();

let set = new Set();
set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size)

let setA = new Set();
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set();
setB.add(2)
setB.add(3)
setB.add(4)

let unionAB = new Set();
for(let x of setA) {
    unionAB.add(x)
}
for (let x of setB) {
    unionAB.add(x)
}

function intersection(A, B) {
    let intersectionSet = new Set();
    for (let x of A) {
        if (B.has(x)) {
            intersectionSet.add(x)
        }
    }
    return intersectionSet
}
let intersectionAB = intersection(setA, setB);

function difference(A, B) {
    let differenceSet = new Set();
    for (let x of A) {
        if (!B.has(x)) {
            differenceSet.add(x)
        }
    }
    return differenceSet
}
let differenceAB = difference(setA, setB);

function subSet(A, B) {
    if (A.size > B.size) {
        return false;
    }else {
        for(let x of A) {
            if(!B.has(x)) {
                return false;
            }
        }
        return true;
    }
}
let isSub = subSet(setA, setB);

console.log(unionAB)
console.log(intersectionAB)
console.log(differenceAB)
console.log(isSub)