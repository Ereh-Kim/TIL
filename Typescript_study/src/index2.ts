/*

앞에서 다루지 못한
typescript 문법에 대해 다루는 ts file 이다

*/

// void

function Void_Function ():void{
    console.log('hello')
}

/*
주로 function 에서 반환되는 값이 없음을 표현하는 자료형을 void 라고 한다
*/

// never

function showError():never{
    throw new Error();
}

function inLoop():never{
    while(true){
        // do something
    }
}

/*
에러를 반환하거나 무한 loop 를 타는 function 을
나타내는 자료형을 never 라고 한다
*/

interface user {
    name: string,
    age: number
}

let New_user:user = {
    name:'kim',
    age: 23
}

// interface 로 객체를 정의해줄 때

interface Add {
    (num1:number, num2:number):number
}

const add: Add = function(x,y){
    return x+y
}

add(10,20)

// interface 로 function 을 정의해줄 때

interface Car {
    color: string,
    wheels: number,
    start():void
}

class Bmw implements Car {
    color;
    wheels= 4
    start():void{
        console.log('...go')
    }

    constructor(c:string){
        this.color = c
    }
}

const b = new Bmw('green')

// interface 로 class 를 정의해줄 때

interface Benz extends Car {
    door: number,
    stop():void
}

// extends 를 통해, js 의 class 처럼 interface 를 확장할 수 있다

const benz: Benz = {
    door: 4,
    stop(){
        console.log('stop')
    },
    color: 'white',
    wheels: 4,
    start(){
        console.log('start')
    }
}
 
// ㄴ> 위 예시는, extends 를 통해, 확장된 interface 를
//     적용한 구문의 예시입니다

/*

interface 도 type aliases 와 맥락을 같이 하고 있습니다.

type aliases 와 같이
다른 변수에 부여할 수 있는 자료형의 틀을
만들 수 있게끔 하는 자료형에는

type aliases 와 더불어,
interface 이 있습니다.

property 에 대한 제한성은
type aliases 의 제한성을 따라갑니다

*/

/*
typescript 에는,

public, private, protected 등의
접근 제한자들이 존재한다

이 중에서,
public 은 선언을 할 수 있으나,
특정된 상황들이 아니기에,
선언없이도 자주 쓰인다.

( public 은,
자유롭게 참조하거나,
instance 를 생성할 때,
property 으로의 접근을 자유롭게 허용하도록 한다 )

*/

class Car_access_modified{
    
    name: string = 'car'
    private private_data: string = 'this is not a car'
    // ㄴ> #private_data 로도 표기 가능
    protected protected_data: string = 'Top_secret => I am human! '
    color:string;
    constructor(color:string){
        this.color = color
    }
    start(){
        console.log(this.name+'...go!')
        console.log('this is my secret... pls...' + this.private_data)
    }
}

class Bmw_access_modified extends Car_access_modified{
    constructor(color: string){
        super(color)
    }
    // showPrivate(){
    //     console.log(super.private_data)
    // }
    // ㄴ> private 접근 제한자로 인해 에러가 발생

    /*
    ㄴ> private 접근 제한자를 통해서,
        자식 class 에서의,
        해당 private 을 주석 달은 데이터에 대한 접근이
        제한되게 된다.

        Car_access_modified class 내에서만
        접근할 수 있게 된다
    */

    }

const z4 = new Bmw_access_modified('black')

// console.log(z4.protected_data)
// ㄴ> protected 접근 제한자로 인해, 에러가 발생

    /*
    ㄴ> protected 접근 제한자가
        
        자식 class 에서도,
        해당 protected 를 주석 달은 데이터의 상속까지
        제어하지 않으나,

        instance 를 통한 접근을 제어하게 된다
    */  
