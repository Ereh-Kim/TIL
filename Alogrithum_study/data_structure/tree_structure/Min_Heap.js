class BST_Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST_Max_Heap {
    constructor(){
        this.root = null
    }

    insert(value){

        let New_Node = new BST_Node(value);
        if(this.root === null){
            this.root = New_Node;
            return this;
        }
    
        let current = this.root
        while(current){
            
            if(value === current.value)return undefined;
            
            if(value > current.value){   
            
                if(current.left === null){
                    current.left = New_Node
                    return this;
                }
                
                else if(current.right === null){
                    current.right = New_Node
                    return this;
                }
                
                else{
                    let Random_index = Math.floor(Math.random()*2)
    
                    if(Random_index === 0){
                        current = current.left
                    }
                    else{
                        current = current.right
                    }
                }

                
            } else{

                let temp = current.value
                current.value = value
                this.insert(temp)             

            }
        } 
    }

}

const BST_Example = new BST_Max_Heap
BST_Example.insert(5)
BST_Example.insert(7)
BST_Example.insert(3)
BST_Example.insert(1)
BST_Example.insert(6)
BST_Example.insert(10)

console.log(BST_Example)
console.log(BST_Example.root.left)
console.log(BST_Example.root.right)
