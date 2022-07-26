
// 부모 - 자식 관계의 맺음을 중심으로, 
// 관리되는 자료구조 => 'tree'

// 그중에서도 child 를 세 개 이상 가져가지 않는 'tree' 구조를
// 'Binary Tree' 구조라고 합니다

class Binary_Tree_Node {
    constructor( value ){
        this.value = value;
        this.Left_Child = null;
        this.Right_Child = null;
    }
}

class Binary_Tree_Structure {
    constructor( ){
        this.root = null
    }

    insert = (value) => {

        let current = this.root
        const New_Node = new Binary_Tree_Node(value)

        if(!current){
            this.root = New_Node
        }

        while(current){
            
            if(current.Left_Child === null){
                current.Left_Child = New_Node
                return this;
            }
            
            else if(current.Right_Child === null){
                current.Right_Child = New_Node
                return this;
            }
            
            else{
                let Random_index = Math.floor(Math.random()*2)

                if(Random_index === 0){
                    current = current.Left_Child
                }
                else{
                    current = current.Right_Child
                }
            }

        }

    }

        }
    
        const Binary_Tree_Node_Example = new Binary_Tree_Structure()
        Binary_Tree_Node_Example.insert(1)
        Binary_Tree_Node_Example.insert(2)
        Binary_Tree_Node_Example.insert(3)
        Binary_Tree_Node_Example.insert(4)
        Binary_Tree_Node_Example.insert(5)

        // console.log(Binary_Tree_Node_Example)


// console.log(Binary_Tree_Node_Example, ` Binary Tree 구조의 예시입니다`)

// 'Tree' 의 종류도 다양한데,


// ㄴ> Left Child 부터 채워진 => 'Complete Binary Tree' 

// ㄴ> Child Node 를 두개이거나 없는 => 'Full Binary Tree'

// ㄴ> Child Node 가 두개로 tree 가 node로 모두 채워진 => 'Perfect Binary Tree'
