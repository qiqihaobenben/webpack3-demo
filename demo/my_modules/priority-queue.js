/*
 * @Author: cfangxu 
 * @Date: 2018-03-04 22:57:35 
 * @Description:  优先队列
 * @Last Modified time: 2018-03-04 22:57:35 
 */

const items = new WeakMap();
class QueueElement {
    constructor (element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
export default class Queue {
    constructor() {
        items.set(this, [])
    }
    enqueue(element, priority) {
        let s = items.get(this);
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for(var i = 0; i < s.length; i++) {
            if (queueElement.priority < s[i].priority) {
                s.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added) {
            s.push(queueElement);
        }
    }
    dequeue() {
        let s = items.get(this);
        return s.shift();
    }
    front() {
        let s = items.get(this);
        return s[0]
    }
    isEmpty() {
        let s = items.get(this);
        return s.length == 0;
    }
    size() {
        let s = items.get(this);
        return s.length;
    }
    print() {
        let s = items.get(this);
        s.forEach((item, index) => {
            console.log(`${item.element}-${item.priority}`)
        })
    }
}