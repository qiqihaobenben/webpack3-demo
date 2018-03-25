function Graph() {
    let vertices = {},
    let adjList = new Map();

    this.addVertex = function () {
        vertices.push(v)
        adjList.set(v, [])
    }

    this.addEdge = function (v,w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
}
