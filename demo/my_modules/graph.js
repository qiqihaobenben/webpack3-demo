import Queue from './queue'
function Graph() {
    let vertices = [],
        adjList = new Map();
    let initilizeColor = function () {
        let color = [];
        for(let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }

    this.addEdge = function (v,w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.bfs = function (v, callback) {
        let color = initilizeColor(),
            queue = new Queue();
        queue.enqueue(v)
        while(!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for(let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if(color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w)
                }
            }
            color[u] = 'black';
            if(callback) {
                callback(u);
            }
        }
    }

    this.toString = function () {
        let s = '';
        for(let i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            let neighbors = adjList.get(vertices[i]);
            for(let j = 0; j < neighbors.length; j ++) {
                s += neighbors[j];
            }
            s += '\n'
        }
        return s;
    }
}

export default Graph;
