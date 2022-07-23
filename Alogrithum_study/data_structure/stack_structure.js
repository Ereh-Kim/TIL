
 // 탑? 을 쌓듯이 데이터를 관리하는 자료구조 => 'stack 구조'

 //( Whick ) Last In, ( goes ) First Out 에 통용되는 구조를 가지고 있다.

 // pop, push, peek, isEmpty 의 단계들을 활용해 구현된다

 // pop => 맨 마지막에 insert 한 데이터를 반환해주면서 지우는 단계

 // push => 새롭게 insert 하게 되는 데이터를 축적하는 단계

 // peek => 맨 마지막에 insert 한 데이터를 조회하는 단계

 // isEmpty => 구조에 남아있는 데이터가 존재하는지 확인하는 단계

 // isFull => 구조에 데이터가 들어갈 공간이 남아있는지 확인하는 단계

 const Dummy_Data = [3, 5, 2, 4, 1]

 class Stack {

    constructor( array ){
        this.array = array
        this.top = array[array.length-1]
        this.size = 5
    }

    pop = () => {

        if(this.array.length>=1){

        console.log(
            `마지막에 insert 되었던 값 ${this.top}이 자료구조에서 삭제되었습니다`
            )
        
        this.array.pop()
        const Renewed_Top = this.array[this.array.length-1]
        this.top = Renewed_Top
        
        return this
    }

        else{
            this.isEmpty()
        }


    }

    push = (input) => {

        this.isFull()

        console.log(
            `${input}이/가 자료구조에 insert 되었습니다`
            )

        this.array.push(input)
        const Renewed_Top = this.array[this.array.length-1]
        this.top = Renewed_Top

        return this
    }

    peek = () => {

        console.log(
            `이 자료구조의 가장 최근에 insert 된 값은 ${this.top} 입니다`
        )

        return this

    }

    isEmpty = () => {

        if( this.array.length == 0 ){
            console.log(`이 자료구조에는 더 이상 데이터가 존재하지 않습니다`)
            return this
        }

        else{

            console.log(`이 자료구조에는 아직 데이터가 남아있습니다`)

            if(this.array.length == this.size){
                this.isFull()
            }

            else{
                console.log(`아직 이 자료구조에는 ${this.array.length} 개의 데이터가 남아있습니다`)
                return this
            }
        }

    }

    isFull = () => {

        if( this.array.length >= this.size ){
            console.log('이 자료구조는 이미 꽉 찼습니다')
            return this
        }

        else if( this.array.length != this.size ){
            console.log(`이 자료구조가 꽉 차기까지 ${ this.size - this.array.length} 개의 데이터가 더 들어갈 수 있습니다`)
        }
    
    }

 }

 let Stack_Example = new Stack(Dummy_Data)


Stack_Example.pop()
Stack_Example.push(99)
Stack_Example.peek()
Stack_Example.isEmpty()
Stack_Example.isFull()

Stack_Example.pop()
Stack_Example.pop()
Stack_Example.pop()
console.log(Stack_Example.array)

Stack_Example.pop()
Stack_Example.pop()
Stack_Example.pop()

// stack 자료구조는,
// * 실행취소
// * 웹 뒤로 가기
// * 역순 문자열 만들기
// 등의 예시들로 쓰인다