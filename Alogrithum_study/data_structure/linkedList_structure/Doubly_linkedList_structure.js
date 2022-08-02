// 배열의 길이가 정해지지 않은 데이터를 관리하는
// 선형의 자료구조 => 'Linked_List'

// 그 중에서도, 양방향으로만 연결되어있는 'Linked_List' 를
// 'Doubly_Linked_List' 라고 한다

// add, remove, size, display, search 의 단계들을 통해 관리된다

class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.pre = null
    }
}

class Doubly_Linked_List {
    constructor(){
        this.head = null
        this.tail = null
        this.list = null
        this.size = 0
    }

    add_Node_AtHead(data){
        const New_Node = new Node(data)
        if(this.list === null){
            this.list = New_Node
            this.head = New_Node
            this.list = New_Node
            this.size++
        }
        else{
            let Current_Node = this.list
            let TailNode = this.list

            New_Node.next = Current_Node
            Current_Node.pre = New_Node
            this.list = New_Node

            this.head = this.list.data
            
            while(TailNode.next !== null){
                TailNode = TailNode.next
            }
            this.tail = TailNode.data
            this.size++
        }
    }

    add_Node_AtTail(data){
        const New_Node = new Node(data)
        let Current_Node = this.list

        while(Current_Node.next != null){
            Current_Node = Current_Node.next
        }

        New_Node.pre = Current_Node
        Current_Node.next = New_Node

        this.tail = New_Node.data
        this.size++
    }

    find_Node(target){
        let Current_Node = this.list

        while(Current_Node != null&&
            Current_Node.data != target){

            Current_Node = Current_Node.next
        }

        if(Current_Node != null){
            return Current_Node
        }
        else{
            return`검색하신 Node(${target})가 Doubly linkedlist 자료구조에 없습니다`
        }
    }

    show_List(){
        let display = [];
        let Current_Node = this.list

        while(Current_Node.next != null){
            display.push(Current_Node.data,'<->')
            Current_Node = Current_Node.next
        }

        display.push(Current_Node.data)
        return display
    }

    Remove_Node(target){
        let Current_Node = this.list
        let PreOrder_Node = this.list

        while(Current_Node != null&&
            Current_Node.data != target){

            PreOrder_Node = Current_Node
            Current_Node = Current_Node.next
        }

        if(target === this.head){
            Current_Node = Current_Node.next
            Current_Node.pre = null
            this.list = Current_Node
            this.size--

            this.head = Current_Node.data
        }
        else if(Current_Node != null){

            PreOrder_Node.next = Current_Node.next
            Current_Node.pre = PreOrder_Node
            this.size--

            this.head = this.list.data

            let TailNode = this.list
            while(TailNode.next != null){
                TailNode = TailNode.next
            }
            this.tail = TailNode.data
            
        }
        else{
            return`검색하신 Node(${target})가 Doubly linkedlist 자료구조에 없습니다`
        }
    }

    Insert_Node_Next_To(target,data){

        let Next_Node = this.list
        let Current_Node = this.list
        let Insert_Node = new Node(data)

        while(Current_Node.next != null&&
            Current_Node.data != target){
            Current_Node = Current_Node.next
        }
            Next_Node = Current_Node.next

        if(Current_Node != null){

            Current_Node.next = Insert_Node
            Insert_Node.next = Next_Node

            Next_Node.pre = Insert_Node
            Insert_Node.pre = Current_Node
            this.size++
        }
        else{
            return`추가하실 Node(${data})와 연결할 Node(${target})가 Doubly linkedlist 자료구조에 없습니다`
        }

    }

    Insert_Node_Before_(target,data){

        let Insert_Node = new Node(data)

        let Current_Node = this.list
        let PreOrder_Node = this.list

        while(Current_Node.next != null&&
            Current_Node.data != target){
                Current_Node = Current_Node.next
        }
            PreOrder_Node = Current_Node.pre

        if(Current_Node != null){
            PreOrder_Node.next = Insert_Node
            Insert_Node.next = Current_Node

            Current_Node.pre = Insert_Node
            Insert_Node.pre = PreOrder_Node
            this.size++
        }
        else{
            return`추가하실 Node(${data})와 연결할 Node(${target})가 Doubly linkedlist 자료구조에 없습니다`
        }
    }

    clear(){
        this.list= null
    }
}

const Doubly_Linked_List_Example = new Doubly_Linked_List()
Doubly_Linked_List_Example.add_Node_AtHead('A1')
Doubly_Linked_List_Example.add_Node_AtHead('B1')
Doubly_Linked_List_Example.add_Node_AtTail('C1')
Doubly_Linked_List_Example.add_Node_AtTail('D1')
Doubly_Linked_List_Example.Remove_Node('D1')
Doubly_Linked_List_Example.Insert_Node_Next_To('B1','B2')
Doubly_Linked_List_Example.Insert_Node_Before_('A1','A0')
Doubly_Linked_List_Example.add_Node_AtHead('B0')


console.log(Doubly_Linked_List_Example.find_Node('A0'))
console.log(Doubly_Linked_List_Example.show_List())
console.log(Doubly_Linked_List_Example)


    // 실제 사례로는,
    // ㄴ> * 음악 플레이 목록
    // ㄴ> * web 뒤로 가기 및 실행 취소 기능
    // 이 있겠다
