function HashTable() {
    var table = [];

    // 先实现一个散列函数方法，它是HashTable类中的一个私有方法
    /* var djb2HashCode = function (key) {
        var hash = 0;
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // 减小hash的数值
    } */

    // djb2散列函数
    var djb2HashCode = function(key) {
        var hash = 5381;
        for(var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }

    // 向散列表增加一个新的项（也能更新散列表）
    this.put = function(key, value) {
        var position = djb2HashCode(key);
        table[position] = value;
    }

    // 返回根据键值检索到的特定的值
    this.get = function(key) {
        return table[djb2HashCode(key)];
    }

    // 根据键值从散列表中移除值
    this.remove = function(key) {
        table[djb2HashCode(key)] = undefined;

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