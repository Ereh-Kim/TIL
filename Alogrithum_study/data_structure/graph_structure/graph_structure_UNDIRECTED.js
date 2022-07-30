
class Node {
    constructor(value) {
      this.value = value;
      this.adjacents = []; 
    }
  }

  class Graph_UNDIRECTED {
    constructor(){
        this.nodes = {}
        this.Directed_Presence = false
    }

    add_Vertex(value){
        
        let Cotain_Nodes = this.nodes

        if(Cotain_Nodes.hasOwnProperty(value)){
            // console.log(`해당 값은 graph 자료구조 안에 이미 존재합니다`)
            return;
        }
        else{
            const vertex = new Node(value)
            this.nodes[`${value}`] = vertex
            // console.log(`해당 값인 ${value} 를 graph 자료구조에 새로이 추가했습니다`)
            return;
        }
    }

    addEdge( Vertex_StartP, Vertex_EndP ) {
        
        let Contain_Nodes = this.nodes

        if(Vertex_StartP == Vertex_EndP){
            if( Contain_Nodes[`${Vertex_StartP}`].adjacents.includes(Vertex_EndP) ){
                // console.log(`해당 vertex 는 edge 로 스스로와 연결되어있습니다`)
                return;
            }
            else{
                Contain_Nodes[`${Vertex_StartP}`].adjacents.push(Vertex_EndP)
            }
        }

        else if(Contain_Nodes[`${Vertex_StartP}`]&&Contain_Nodes[`${Vertex_EndP}`]){

            let Adjacents_Sp = Contain_Nodes[`${Vertex_StartP}`].adjacents
            let Adjacents_Ep = Contain_Nodes[`${Vertex_EndP}`].adjacents

            if(
               Adjacents_Ep.includes(Vertex_StartP)&&
               Adjacents_Sp.includes(Vertex_EndP)
               ){
                // console.log(`해당된 두 vertex 는 edge 로 연결되어있습니다`)
                return;
            }
            else if(
                !Adjacents_Ep.includes(Vertex_StartP)&&
                !Adjacents_Sp.includes(Vertex_EndP)
            ){
                Contain_Nodes[`${Vertex_StartP}`].adjacents.push(Vertex_EndP)
                Contain_Nodes[`${Vertex_EndP}`].adjacents.push(Vertex_StartP)
            }
            else if(
                !Adjacents_Ep.includes(Vertex_StartP)&&
                Adjacents_Sp.includes(Vertex_EndP)
            ){
                Contain_Nodes[`${Vertex_EndP}`].adjacents.push(Vertex_StartP)
            }
            else if(
                Adjacents_Ep.includes(Vertex_StartP)&&
                !Adjacents_Sp.includes(Vertex_EndP)
            ){
                Contain_Nodes[`${Vertex_StartP}`].adjacents.push(Vertex_EndP)
            }
            else{
                return;
            }
    
        }
        else{
            // console.log(`두 vertex 중 하나가 없거나 모두 없습니다`)
            return;
        }

    }

    DFS = (Start_Node) => {
        
        // let visited = {};
        let visited = [];
        let Helper_Stack = [];  
        // let Turn = 0;
        
        let Start_dfs = Helper_Stack.push(Start_Node);
        Start_dfs;

        while(Helper_Stack.length !== 0){
          let Poped_Node = Helper_Stack.pop();
          Poped_Node;

          if(
            // visited[Poped_Node] == undefined
            !visited.includes(Poped_Node)
            ){
            // Turn++
            // visited[Poped_Node] = `${Poped_Node} is visited as turn ${Turn}`
            visited.push(Poped_Node)
            Helper_Stack = [...Helper_Stack, ...this.nodes[Poped_Node].adjacents];
            
          }
        }
        return visited;
      }

      BFS = (Start_Node) => {

        // let visited = {};
        let visited = [];
        let Helper_Queue = [];
        // let Turn = 0;
        
        let Start_bfs = Helper_Queue.push(Start_Node)
        Start_bfs;

        while(Helper_Queue.length !== 0){
            
            let Dequeued_Node = Helper_Queue.shift(0,1)
            Dequeued_Node;

            if(
                // visited[Dequeued_Node] == undefined
                !visited.includes(Dequeued_Node)
                ){
                // Turn++
                // visited[Dequeued_Node] = `${Dequeued_Node} is visited as turn ${Turn}`
                visited.push(Dequeued_Node)
                Helper_Queue = [...Helper_Queue, ...this.nodes[Dequeued_Node].adjacents]
            }
        }
        return visited
      }

  }

    const Graph_Example = new Graph_UNDIRECTED()

    Graph_Example.add_Vertex(0)
    Graph_Example.add_Vertex(1)
    Graph_Example.add_Vertex(2)
    Graph_Example.add_Vertex(3)
    Graph_Example.add_Vertex(4)
    Graph_Example.add_Vertex(5)
    Graph_Example.add_Vertex(6)
    Graph_Example.add_Vertex(7)
    Graph_Example.add_Vertex(8)


    Graph_Example.addEdge(1,0)
    Graph_Example.addEdge(1,2)
    Graph_Example.addEdge(1,3)
    Graph_Example.addEdge(2,3)
    Graph_Example.addEdge(2,4)
    Graph_Example.addEdge(3,4)
    Graph_Example.addEdge(3,5)
    Graph_Example.addEdge(5,6)
    Graph_Example.addEdge(5,7)
    Graph_Example.addEdge(6,8)

    // console.log(Graph_Example.nodes)
    // console.log(Graph_Example.DFS(0))
    console.log(Graph_Example.BFS(0))
