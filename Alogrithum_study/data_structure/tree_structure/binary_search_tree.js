class BST_Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
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
            
            if(value < current.value){   
            
                if(current.left === null){
                current.left = New_Node;
                return this
            }

                current = current.left
                
            } else{
                if(current.right === null){
                    current.right = New_Node;
                    return this;
                }
                current = current.right
            }
        } 
    }

}

const BST_Example = new BST
BST_Example.insert(5)
BST_Example.insert(7)
BST_Example.insert(3)
BST_Example.insert(1)


console.log(BST_Example)

// 'Binary Search Tree' 는,

// Left Child 는 Parent 보다 작은 값을,
// Right Child 는 Parent 보다 큰 값을,
// 나열한 'Tree' 구조를 말한다