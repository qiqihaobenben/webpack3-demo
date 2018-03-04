let _items = Symbol();
// 先创建一个类来表示栈
class Stack {
    constructor () {

        // 需要一种数据结构来保存栈里的元素，这里选择数组
        this[_items] = [];

        // 缓存栈的size
        this.size = 0;
    }

    /* 声明栈需要的一些方法 */

    // 重置栈的size
    resetSize () {
        return this[_items].length;
    }

    // 打印栈数据
    print () {
        console.log(this[_items].toString())
    }

    //添加一个或几个新元素到栈顶，该方法只添加元素到栈顶，也就是栈的末尾,返回当前栈元素数量
    push (){
        this[_items].push.apply(this[_items], arguments)
        this.size = this.resetSize();
        return this.size;
    }

    // 移除栈顶的元素，同时返回被移除的元素，栈遵循LIFO原则，因此移除的是最后添加进去的元素
    pop () {
        this.size--;
        return this[_items].pop();
    }

    // 返回栈顶的元素，不对栈做任何修改
    peek () {
        return this[_items][this.size - 1];
    }

    // 判断栈是否为空，如果栈里没有任何元素就返回true，否则返回false
    isEmpty () {
        return this.size == 0;
    }

    // 移除栈里的所有元素
    clear () {
        this[_items].length = 0;
        this.size = this.resetSize();
    }

    // 返回栈里的元素个数
    getSize () {
        return this.size;
    }
}

export default Stack