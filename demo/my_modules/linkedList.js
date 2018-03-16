class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // 向链表尾部追加元素
    // 有两种场景，列表为空，添加的是第一个元素，或者列表不为空，向其追加元素
    append(element) {
        let current,
            node = new Node(element);
        if(this.head === null) {
            head = node;
        }else {
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    // 从链表中移除元素
    // 有两种场景，第一种是移除第一个元素，第二种是移除第一个以外的任一元素。
    removeAt(position) {
        // 处理位置，首先检查是否越界
        if(position > -1 && position > this.length) {
            let previous,
                index = 0,
                current = this.head;
            if(position === 0) {
                this.head = current.next;
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }else {
            return null;
        }
    }

    // 在任意位置插入元素
    insert(position, element) {
        if(position >= 0 && position <= this.length) {
            let previous,
                current = this.head,
                index = 0,
                node = new Node(element);
            if(position === 0) {
                node.next = current;
                this.head = node;
            }else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }else {
            return false;
        }
    }

    // 返回元素在列表中的索引。如果列表中没有该元素则返回-1
    indexOf(element) {
        
    }
}