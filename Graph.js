class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph.
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an undirected edge between two vertices.
  addEdge(v1, v2) {
    // Ensure both vertices exist.
    if (!this.adjacencyList.has(v1)) this.addVertex(v1);
    if (!this.adjacencyList.has(v2)) this.addVertex(v2);

    // Add the edge in both directions.
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  // Print the graph.
  printGraph() {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

// Example usage:
const graphClass = new Graph();
graphClass.addVertex("A");
graphClass.addVertex("B");
graphClass.addEdge("A", "B");
graphClass.addEdge("A", "C");
graphClass.addEdge("B", "D");
console.log("Class-Based Graph:");
graphClass.printGraph();

function createGraph() {
  const adjacencyList = new Map();

  // Add a vertex to the graph.
  function addVertex(vertex) {
    if (!adjacencyList.has(vertex)) {
      adjacencyList.set(vertex, []);
    }
  }

  // Add an undirected edge between two vertices.
  function addEdge(v1, v2) {
    if (!adjacencyList.has(v1)) addVertex(v1);
    if (!adjacencyList.has(v2)) addVertex(v2);
    adjacencyList.get(v1).push(v2);
    adjacencyList.get(v2).push(v1);
  }

  // Print the graph.
  function printGraph() {
    adjacencyList.forEach((edges, vertex) => {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    });
  }

  return {
    addVertex,
    addEdge,
    printGraph,
  };
}

// Example usage:
const graphFactory = createGraph();
graphFactory.addVertex("A");
graphFactory.addVertex("B");
graphFactory.addEdge("A", "B");
graphFactory.addEdge("A", "C");
graphFactory.addEdge("B", "D");
console.log("\nFunction-Based Graph:");
graphFactory.printGraph();
