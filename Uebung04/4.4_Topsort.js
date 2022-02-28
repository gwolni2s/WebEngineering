// Source: https://gist.github.com/adech12/fc6f50303ce0e78e827b5bc38e202f61#file-topologicalsortsamplegraph-js

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }
}

const graph = function() {
    const g = new Graph();
    ["schlafen", "studieren", "essen", "prüfen"].forEach((v) => g.addVertex(v));
    g.addEdge("schlafen", "studieren");
    g.addEdge("essen", "studieren");
    g.addEdge("studieren", "prüfen");
    return g;
}();

// Source: https://gist.github.com/adech12/1115f71fbc1c8e220e1f2e90f506e1b9#file-topologicalsorthelper-js

function dfsTopSortHelper(v, n, visited, topNums) {
    visited[v] = true;
    const neighbors = graph.adjacencyList[v];
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            n = dfsTopSortHelper(neighbor, n, visited, topNums);
        }
    }
    topNums[v] = n;
    return n - 1;
}

// Source: https://gist.github.com/adech12/aaf9398aa45952d0aa272827d0102590#file-topologicalsortdriver-js

function dfsTopSort(graph) {
    const vertices = Object.keys(graph.adjacencyList);
    const visited = {};
    const topNums = {};
    let n = vertices.length - 1;
    for (const v of vertices) {
        if (!visited[v]) {
            n = dfsTopSortHelper(v, n, visited, topNums)
        }
    }
    return topNums;
}

console.log(dfsTopSort(graph));
