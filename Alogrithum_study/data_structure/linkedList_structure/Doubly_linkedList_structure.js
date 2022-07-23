// 배열의 길이가 정해지지 않은 데이터를 관리하는
// 선형의 자료구조 => 'Linked_List'

// 그 중에서도, 양방향으로만 연결되어있는 'Linked_List' 를
// 'Doubly_Linked_List' 라고 한다

 class Doubly_Linked_List_Node {

    constructor( Next_Node, Previous_Node, headValue ){
        this.Next_Node = Next_Node
        this.Previous_Node = Previous_Node
        this.headValue = headValue
    }

    LinkAs_Previous = (input) => {
        this.Previous_Node = input
    }

    LinkAs_Next = (input) => {
        this.Next_Node = input
    }

    Insert_Node = (Next_Node, Previous_Node) => {
        Previous_Node.LinkAs_Next(this)
        this.LinkAs_Next(Next_Node)
        this.LinkAs_Previous(Previous_Node)
        Next_Node.LinkAs_Previous(this)
    }

    Delete_Node = (Next_Node, Previous_Node) => {
        Previous_Node.LinkAs_Next(Next_Node)
        Next_Node.LinkAs_Previous(Previous_Node)

        // 그리고 해당 node 를 쓰지 않겠다는 선언이 포함되어야 함

        // 해당 TIL에서는 데이터베이스를 쓰지 않아서,
        // 임의의 선언을 만들기 보다 메모를 하는 편이 더 효율적( 아는 정도면 충분 )

    }


 }

    const A1 = new Doubly_Linked_List_Node(null, null, 'A1')
    const B1 = new Doubly_Linked_List_Node(null, null, 'B1')
    const C1 = new Doubly_Linked_List_Node(null, null, 'C1')

    C1.LinkAs_Next(B1)
    B1.LinkAs_Next(A1)
    B1.LinkAs_Previous(C1)
    A1.LinkAs_Previous(B1)

console.log(`B1 은 Next_Node 로 ${B1.Next_Node.headValue} 와 연결되어 있습니다`)
console.log(`C1 은 Next_Node 로 ${C1.Next_Node.headValue} 와 연결되어 있습니다`)

console.log(`B1 은 Previous_Node 로 ${B1.Previous_Node.headValue} 와 연결되어 있습니다`)
console.log(`A1 은 Previous_Node 로 ${A1.Previous_Node.headValue} 와 연결되어 있습니다`)

console.log(` C1 => ${C1.Next_Node.headValue} => ${B1.Next_Node.headValue} 순으로 연결되었습니다 `)

// Doubly_linkedList 가 새롭게 node 를 추가하는 과정

    const B2 = new Doubly_Linked_List_Node(null, null, 'B2')
    B2.Insert_Node(B1, C1)


    console.log(`B2 의 Next_Node 로 ${B2.Next_Node.headValue} 와 새롭게 연결했습니다`)
    console.log(`B2 의 Previous_Node 로 ${B2.Previous_Node.headValue} 와 새롭게 연결했습니다`)    

    console.log(`C1 의 Next_Node 로 ${C1.Next_Node.headValue} 와 새롭게 연결했습니다`)
    console.log(`B1 의 Previous_Node 로 ${B1.Previous_Node.headValue} 와 새롭게 연결했습니다`)

    console.log(` C1 => ${C1.Next_Node.headValue} => ${B2.Next_Node.headValue} => ${B1.Next_Node.headValue} 순으로 연결되었습니다 `)

// Doubly_linkedList 가 기존의 node 를 삭제하는 과정

    B2.Delete_Node(B1,C1)

    console.log(`C1 의 Next_Node 로 ${C1.Next_Node.headValue} 와 새롭게 연결했습니다`)
    console.log(`B1 의 Previous_Node 로 ${B1.Previous_Node.headValue} 와 새롭게 연결했습니다`)

    console.log(` C1 => ${C1.Next_Node.headValue} => ${B2.Next_Node.headValue} => ${B1.Next_Node.headValue} 순으로 연결되었습니다 `)
