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
            }}}

            inOrderHelper =(current_root)=> {
                if (current_root !== null) {
                   this.inOrderHelper(current_root.left);
                   console.log(current_root.value);
                   this.inOrderHelper(current_root.right);
                }
            }

            inOrder =()=> {
                this.inOrderHelper(this.root);
                }

            preOrderHelper = (current_root) =>{
                if(current_root !== null){
                    console.log(current_root.value)
                    this.preOrderHelper(current_root.left)
                    this.preOrderHelper(current_root.right)
                }
            }

            preOrder = () => {
                this.preOrderHelper(this.root)
            }

            postOrederHelper = (current_root)=>{
                if(current_root !== null){
                    this.postOrederHelper(current_root.left)
                    this.postOrederHelper(current_root.right)
                    console.log(current_root.value)
                }
            }    
            
            postOrder = ()=>{
                this.postOrederHelper(this.root)
            }

            postOrederHelper_demo_find = (current_root,value)=>{
                if(current_root !== null){
                    this.postOrederHelper_demo_find(current_root.left,value)
                    this.postOrederHelper_demo_find(current_root.right,value)
                    if(current_root.value == value)
                    {console.log(current_root.value)}
                }
            }    
            
            postOrder_demo_find = (value)=>{
                this.postOrederHelper_demo_find(this.root,value)
            }

}

const BST_Example = new BST
BST_Example.insert(5)
BST_Example.insert(7)
BST_Example.insert(3)
BST_Example.insert(4)
BST_Example.insert(2)
BST_Example.insert(6)
BST_Example.insert(8)
BST_Example.insert(0)
BST_Example.insert(2.5)
BST_Example.insert(3.5)
BST_Example.insert(4.5)



// BST_Example.inOrder()
// console.log(`ㄴ> inorder traversal 의 예시입니다`)

// BST_Example.preOrder()
// console.log(`ㄴ> preorder traversal 의 예시입니다`)

// BST_Example.postOrder()
// console.log(`ㄴ> postorder traversal 의 예시입니다`)


BST_Example.postOrder_demo_find(5)
BST_Example.postOrder_demo_find(99)