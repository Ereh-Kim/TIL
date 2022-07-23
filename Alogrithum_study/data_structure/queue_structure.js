
// 대기줄 처럼, 들어간 순서에 따라 가장 빨리 나가게 되는 자료구조 => 'queue 구조'

// ( Whick is ) First In, ( goes ) First Out 

// dequeue, enqueue, peek,
// isEmpty, isFull, display, size
// 의 단계들을 활용해 자료구조를 관리한다

// dequeue => 가장 앞선 데이터를 지우고 반환하는 과정
// enqueue => 데이터를 추가하는 과정

// 선입된 자료를 지칭하기 위해 front, rear 개념들이 쓰인다

// front => 가장 먼저 들어왔고 가장 먼저 제거되는 데이터
// rear => 가장 늦게 들어와서 가장 늦게 제거되는 데이터

const Dummy_Data = [3, 5, 2, 4, 1];

class Queue {

    constructor( array ){
        this.array = array
        this.rear = array[array.length-1]
        this.front = array[0]
        this.size = 5
    }

    dequeue = () => {

      this.isEmpty()

      console.log(`이 자료구조에 에서 front 값인 ${this.array[0]} 가 삭제되었습니다`)

      this.array.shift()
      this.front = this.array[this.array.length-1]

      return this
    }

    enqueue = (input) => {

        this.isFull()

        this.array.push(input)
        this.rear = this.array[this.array.length-1]

        console.log(`이 자료구조에 ${this.rear} 이 rear 값으로써 새롭게 추가되었습니다`)

        return this
    }

    peek = () => {

        this.isEmpty()

        console.log(`이 자료구조의 현 front 값은 ${this.front} 입니다`)

        return this

    }

    isEmpty = () => {

        if(this.array.length === 0){

            console.log(`이 자료구조에 남아있는 데이터가 없습니다`)
            return this

        }

        else {

            console.log(`이 자료구조에 아직 데이터가 남아있습니다`)

        }

    }

    isFull = () => {

        if(this.array.length >= this.size){

            console.log(`이 자료구조에 데이터가 들어갈 수 있는 공간이 더 없습니다`)
            
            return this

        }

        else{

            console.log(`이 자료구조에 ${this.size - this.array.length} 개의 데이터가 더 들어갈 수 있습니다`)

        }

    }

    display = () => {

        console.log(this.array)
        return this
    }

    Size = () => {

        console.log(this.array.length)

        

    }

}

let Queue_Example = new Queue(Dummy_Data)

// console.log(Queue_Example)

Queue_Example.isFull()
Queue_Example.isEmpty()
Queue_Example.dequeue()
Queue_Example.display()
Queue_Example.peek()
Queue_Example.enqueue(99)
Queue_Example.Size()

Queue_Example.dequeue()
Queue_Example.dequeue()
Queue_Example.dequeue()
Queue_Example.dequeue()
Queue_Example.dequeue()
Queue_Example.dequeue()
Queue_Example.display()
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.enqueue(99)
Queue_Example.display()




// queue 의 자료구조는,
// * 대기줄/대기표
// * ㄴ> 은행창구 번호표
// * ㄴ> 프린터 출력
// * ㄴ> 컴퓨터 운영체제의 테스크 스케쥴링
// 등의 예시들로 쓰인다
