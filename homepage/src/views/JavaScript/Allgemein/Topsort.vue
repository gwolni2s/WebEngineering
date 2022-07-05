<template>
  <div>
    <h1>TopSort</h1>
  </div>
  <div id="card">
    Das Ergebnis des Top Sort sheen Sie in der Konsole der Developer Tools.
  </div>
</template>

<script>
export default {
  name: "Topsort",
  mounted() {
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
  }

}
</script>

<style scoped>
* {
  justify-items: center;
}
h1 {
  text-align: center;
  font-size: 38px;
}
div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 70%;
  margin: 2em auto;
}
#card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px; /* 5px rounded corners */
}
#card h3, #card a {
  text-align: center;
  justify-items: center;
}
/*Style from w3schools*/
#card a button {
  background-color: #00afea;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #00afea;
  width: 60%;
  border-radius: 10px;
}
#card a button:hover {
  background-color: #00afea;
  color: white;
}
#card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
  div {
    padding: 15px;
    width: 80%;
  }
}
</style>