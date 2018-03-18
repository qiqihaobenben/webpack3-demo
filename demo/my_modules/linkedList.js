class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // 向链表尾部追加元素
    // 有两种场景，列表为空，添加的是第一个元素，或者列表不为空，向其追加元素
    append(element) {
        let current,
            node = new Node(element);
        if(this.head === null) {
            this.head = node;
        }else {
            current = this.head;
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
        if(position > -1 && position < this.length) {
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
    insert(element, position) {
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
        let current = this.head,
            index = -1;
        while(current) {
            index++;
            if(current.element === element) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }

    // 从列表中移除一项
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    // 判断链表是否为空
    isEmpty() {
        return this.length === 0;
    }

    // 显示链表的大小，返回链表中包含的元素个数
    size() {
        return this.length;
    }

    // 获取链表的头
    getHead() {
        return this.head;
    }

    // 把链表对象转换成字符串
    toString() {
        let string = '',
            current = this.head;
        while(current) {
            string += current.element + (current.next? 'n' : '');
            current = current.next;
        }
        return string;
    }
}

export default LinkedList