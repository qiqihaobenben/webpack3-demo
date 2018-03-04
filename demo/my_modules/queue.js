/*
 * @Author: cfangxu 
 * @Date: 2018-02-28 08:28:17 
 * @Description:  队列类
 * @Last Modified time: 2018-02-28 08:28:17 
 */

const items = new WeakMap();
export default class Queue {
    constructor () {
        items.set(this, [])
    }
    enqueue (element) {
        let s = items.get(this);
        s.push(element);
    }
    dequeue () {
        let s = items.get(this);
        return s.shift();
    }
    front () {
        let s = items.get(this);
        return s[0]
    }
    isEmpty () {
        let s = items.get(this);
        return s.length == 0;
    }
    size () {
        let s = items.get(this);
        return s.length;
    }
    print () {
        let s = items.get(this);
        console.log(s.toString())
    }
}