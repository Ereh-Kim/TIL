// 배열의 길이가 정해지지 않은 데이터를 관리하는
// 선형의 자료구조 => 'Linked_List'

// 그 중에서도, 단방향으로만 연결되어있는 'Linked_List' 를
// 'Singly_Linked_List' 라고 한다

// add, remove, size, display, search 의 단계들을 통해 관리된다

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class Linked_List {
    constructor(){
        this.head = null;
        this.tail = null;
        this.list = null;
        this.size = 0;
    }

    add_Node_AtHead(data){
        const New_Node = new Node(data)
        if(this.size === 0){
            this.head = New_Node.data
            this.tail = New_Node.data
            this.list = New_Node
            this.size++
        }
        else{
            let Renew_Head_Node = New_Node
            this.head = Renew_Head_Node.data
            
            Renew_Head_Node.next = this.list
            this.list = Renew_Head_Node

            while(Renew_Head_Node.next !== null){
                Renew_Head_Node = Renew_Head_Node.next
            }
            const Renew_Tail_Node = Renew_Head_Node.data
            this.tail = Renew_Tail_Node

            this.size++
        }
    }

    add_Node_AtTail(data){
        if(this.size === 0){
            this.head = New_Node.data
            this.tail = New_Node.data
            this.list = New_Node
            this.size++
        }
        else{
            let Renew_Tail_Node = new Node(data)
            let Current_Tail_Node = this.list
            this.tail = Renew_Tail_Node.data
            
            while(Current_Tail_Node.next !== null){
                Current_Tail_Node = Current_Tail_Node.next
            }

            Current_Tail_Node.next = Renew_Tail_Node
            this.size++
        }
    }

    showList(){
        let list = this.list
        let display = []

        while(list.next !== null){
            display.push(list.data, '->')
            list = list.next
        }
        display.push(list.data)

        return display
    }

    search_Node(target){
        let Current_Node = this.list
        while(Current_Node != null &&
            Current_Node.data != target){

            Current_Node = Current_Node.next
        }

        if(Current_Node != null){
            return Current_Node  
        }
        else{
            return`검색하신 Node(${target})가 singly linkedlist 자료구조에 없습니다`
        }
    }

    Insert_Node_Next_To_(target, data){
        
        let Insert_Node = new Node(data)
        let Current_Node = this.list

        while(Current_Node != null &&
            Current_Node.data != target){

            Current_Node = Current_Node.next
        }

        if(Current_Node != null){
            Insert_Node.next = Current_Node.next
            Current_Node.next = Insert_Node
        }
        else{
            console.log(`추가하실 Node(${Insert_Node})와 연결할 Node(${target})가 현재 linkedlist 자료구조에 없습니다`)
            return;
        }
    }

    Insert_Node_Before_(target, data){
        let Current_Node = this.list;
        let PreOrder_Node = this.list
        let Insert_Node = new Node(data)

        if(target === this.head){
            Insert_Node.next = Current_Node
            this.list = Insert_Node
            return;
        }

        else if(target !== this.head){
        while(Current_Node != null &&
            Current_Node.data != target){

                PreOrder_Node = Current_Node
                Current_Node = Current_Node.next
        }

        Insert_Node.next = Current_Node
        PreOrder_Node.next = Insert_Node

        }
        else{
         console.log(`추가하실 Node(${Insert_Node.data})와 연결할 Node(${target})가 현재 linkedlist 자료구조에 없습니다`)
         return;   
        }

    }

    Remove_Node(data){
        let Current_Node = this.list
        let PreOrder_Node = this.list

        while(Current_Node != null &&
            Current_Node.data != data){

            PreOrder_Node = Current_Node
            Current_Node = Current_Node.next
        }

        if(Current_Node != null){
            if(PreOrder_Node.data != data){
                PreOrder_Node.next = Current_Node.next
        }
            else{
                Current_Node = Current_Node.next
                this.list = Current_Node
            }
        }
        else{
            console.log(`제거하실 Node(${data})가 현재 linkedlist 자료구조에 없습니다`)
            return;
        }        
    }

    clear(){
        this.list = null
    }
}

const Linked_List_Example = new Linked_List()
Linked_List_Example.add_Node_AtHead('B1')
Linked_List_Example.add_Node_AtHead('A1')
Linked_List_Example.add_Node_AtTail('C1')
Linked_List_Example.add_Node_AtTail('D1')
Linked_List_Example.add_Node_AtTail('E1')

Linked_List_Example.Insert_Node_Next_To_('A1','B2')
Linked_List_Example.Insert_Node_Before_('C1','C0')

Linked_List_Example.Remove_Node('D1')
console.log(Linked_List_Example.showList())
console.log(Linked_List_Example.head)
console.log(Linked_List_Example.tail)


// 실제 사례로는,
// ㄴ> * 네트워크 내에서의 사용자간의 메세지 전달 기록
// 이 있겠다
