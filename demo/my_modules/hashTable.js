function HashTable() {
    var table = [];

    // 先实现一个散列函数方法，它是HashTable类中的一个私有方法
    var loseloseHashCode = function (key) {
        var hash = 0;
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // 减小hash的数值
    }

    // 向散列表增加一个新的项（也能更新散列表）
    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + '--' + value)
        table[position] = value;
    }

    // 返回根据键值检索到的特定的值
    this.get = function(key) {
        return table[loseloseHashCode(key)];
    }

    // 根据键值从散列表中移除值
    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;

    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + '--' + table[i])
            }
        }
    }
}

export default HashTable