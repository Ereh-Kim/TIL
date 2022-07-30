import {Stack} from './stack_strcture.js'

class Graph {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
 
    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
    }
 
    addEdge(node1, node2, weight = 1) {
       this.edges[node1].push({ node: node2, weight: weight });
       this.edges[node2].push({ node: node1, weight: weight });
    }
 
    addDirectedEdge(node1, node2, weight = 1) {
       this.edges[node1].push({ node: node2, weight: weight });
    }

    DFS(Start_Point) {

    }
}


    const Graph_Example = new Graph()

    Graph_Example.addNode(1)
    Graph_Example.addNode(2)
    Graph_Example.addNode(3)
    Graph_Example.addNode(4)

    Graph_Example.addEdge(1,2)
    Graph_Example.addEdge(3,2)
    Graph_Example.addEdge(3,4)
    Graph_Example.addEdge(1,3)

    // console.log(Graph_Example)

   //  Graph_Example.DFS(1)