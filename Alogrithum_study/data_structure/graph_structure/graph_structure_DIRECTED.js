/*
 'vertex' 라고 불리는 Node 들을
 'edge' 라는 관계도로 표현하는 자료구조 => 'Graph 구조' 

'edge' 에 내포된 자체적인 값의 유무에 따라
'weight' 혹은 'unweighted' 라고 하는 수식어를 붙히고
 
'edge' 의 방향성 유무에 따라
'directed' 혹은 'undirected' 라고 하는 수식어를 붙힙니다

또, 이 중에서도
'edge' 의 관계도가 순회하도록 된 'graph' 구조는 
'cyclic' 이라는 수식어가 붙습니다

'Graph' 자료구조는 크게,
    ㄴ> add_Vertex, add_Edge, 
    ㄴ> BFS( B First Search )
    ㄴ> DFS( Depth First Search )
    ㄴ> Display_adjacency_matrix_way
    ㄴ> Display_adjacency_list_way
    
    의 단계들을 통해 관리된다
*/

class Graph_DIRECTED {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
 
    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
    }
 
    addEdge(node1, node2, weight = 1) {
       
       if(this.nodes.includes(node1)&&
       this.nodes.includes(node2)){
         
         this.edges[node1].push({ destination: node2, weight: weight });}
       
       else{
         console.log(`이 graph 자료구조 내에 두 node 중 하나가 없거나 아예 없습니다`)
         return;
       }
    }

    DFS(Start_Point) {
       
      let visited = [];
      let Helper_Stack = [];

      let Start_dfs = Helper_Stack.push(Start_Point)
      Start_dfs;

      while(Helper_Stack.length != 0){

         let Poped_Node = Helper_Stack.pop()

         if(!visited.includes(Poped_Node)){
            visited.push(Poped_Node)
            
            let adjacents = this.edges[Poped_Node].map(e=>e.destination)
            Helper_Stack = [...Helper_Stack, ...adjacents]
         }
      }

      return visited
    }

    BFS = (Start_Point) =>{

      let visited = []
      let Helper_Queue = []

      let Start_bfs = Helper_Queue.push(Start_Point)
      Start_bfs;

      while(Helper_Queue.length != 0){

         let Dequeued_Node = Helper_Queue.shift()
         Dequeued_Node;

         visited.push(Dequeued_Node)

         let adjacents = this.edges[Dequeued_Node].map(e=>e.destination)
         Helper_Queue = [...Helper_Queue, ...adjacents]

      }
      return visited
    }

    display = () => {
      let display = this.edges
      for(let i=0; i<this.nodes.length; i++){
         display[this.nodes[i]] = this.edges[this.nodes[i]].map(e=>e.destination)
      }
      return display
    }

    display_adj_matrix_way =() =>{

      let source =this.display()
      let Contain_Nodes =[]
      let Contain_Edges = []
      let display = []
      let section = []
      let t=0;

      for(let element in source){
          Contain_Nodes.push(Number(element))
      }

      for(let edges in source){
          Contain_Edges.push(source[edges])
      }

      for(let i=0; i<Contain_Edges.length; i++){
          while(Contain_Nodes[t] != undefined){

              if(Contain_Edges[i].includes(Contain_Nodes[t])){
                  section.push(1)
                  t++
              }
              else if(!Contain_Edges[i].includes(Contain_Nodes[t])){
                  section.push(0)
                  t++
              }
          }
          display.push(section)
          t=0
          section =[]
          }
          return display
      }

}


    const Graph_Example = new Graph_DIRECTED()

    Graph_Example.addNode(1)
    Graph_Example.addNode(2)
    Graph_Example.addNode(3)
    Graph_Example.addNode(4)
    Graph_Example.addNode(5)
    Graph_Example.addNode(7)
   

    Graph_Example.addEdge(2,1)
    Graph_Example.addEdge(3,4)
    Graph_Example.addEdge(1,3)
    Graph_Example.addEdge(3,7)
    Graph_Example.addEdge(4,5)
    Graph_Example.addEdge(7,5)

   //  console.log(Graph_Example)
    console.log(Graph_Example.display_adj_matrix_way())

   //  console.log(Graph_Example.DFS(1))
   //  console.log(Graph_Example.BFS(1))