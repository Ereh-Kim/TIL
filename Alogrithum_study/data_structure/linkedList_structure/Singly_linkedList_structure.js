// 배열의 길이가 정해지지 않은 데이터를 관리하는
// 선형의 자료구조 => 'Linked_List'

// 그 중에서도, 단방향으로만 연결되어있는 'Linked_List' 를
// 'Singly_Linked_List' 라고 한다

// add, remove, size, display, search 의 단계들을 통해 관리된다

class Singly_Linked_List_Node {

    constructor( Next_Node, name ){
        this.Next_Node = Next_Node
        this.name = name
        this.intro = `i am ${this.name}`
    }

    Manage_Next_Node = (input) => {
        this.Next_Node = input
    }

    Insert_Node = ( Next_Node, Previous_Node ) => {
        Previous_Node.Manage_Next_Node(this)
        this.Manage_Next_Node(Next_Node)
    }

    Delete_Node = ( Next_Node, Previous_Node ) => {
        Previous_Node.Manage_Next_Node(Next_Node)
        
        // 그리고 해당 node 를 쓰지 않겠다는 선언이 포함되어야 함

        // 해당 TIL에서는 데이터베이스를 쓰지 않아서,
        // 임의의 선언을 만들기 보다 메모를 하는 편이 더 효율적( 아는 정도면 충분 )
    }

 }

const A1 = new Singly_Linked_List_Node(null, 'A1')
const B1 = new Singly_Linked_List_Node(A1, 'B1')
const C1 = new Singly_Linked_List_Node(B1, 'C1')

console.log(`B1 은 Next_Node 로 ${B1.Next_Node.name} 와 연결되어 있습니다`)
console.log(`C1 은 Next_Node 로 ${C1.Next_Node.name} 와 연결되어 있습니다`)

console.log(` C1 => ${C1.Next_Node.name} => ${B1.Next_Node.name} 순으로 연결되었습니다 `)

// singly_linkedlist 가 새롭게 node 를 추가하는 과정

const B2 = new Singly_Linked_List_Node(null, 'B2')

B2.Insert_Node( A1, B1 )

console.log(`B2 을 Next_Node 로 ${B2.Next_Node.name} 와 새롭게 연결했습니다`)
console.log(`B1 의 Next_Node 로 ${B1.Next_Node.name} 와 새롭게 연결했습니다`)

console.log(` B2 를 추가해서 새롭게 연결한 이후, `)
console.log(` C1 => ${C1.Next_Node.name} => ${B1.Next_Node.name} => ${B2.Next_Node.name} 순으로 연결되었습니다 `)

// singly_linkedlist 가 기존의 node 를 삭제하는 과정

B2.Delete_Node( A1, B1 )

console.log(`B1 의 Next_Node 로 ${B1.Next_Node.name} 와 새롭게 연결으로써`)
console.log(`B2 가 삭제되었습니다`)

console.log(` C1 => ${C1.Next_Node.name} => ${B1.Next_Node.name} => ${B2.Next_Node.name} 순으로 연결되었습니다 `)

// 실제 사례로는,
// ㄴ> * 네트워크 내에서의 사용자간의 메세지 전달 기록
// 이 있겠다