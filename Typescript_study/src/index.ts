/*
typescript 는 js 위에서 동작하는 언어임으로,

js 에서 쓰이던 자료형들이
typescript 에서도 쓰인다

이를테면,
    
    - number
    - string
    - boolean
    - null
    - undefined

이 쓰이지만,

typescript 고유의 자료형들이 존재한다

    1*- any
    2*- tuple
    3*- enum
    4*- unknwon
    5*- never

이 있다

*/

// 1*. any 

let sales: number = 123_456;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level: any;

/* 
ㄴ> typescript 에서는 자료형을 지정해서 정해줄 수 있다

    이처럼 정해주면 debugging 혹은 그 이전에 발견되는 에러를
    미연에 방지할 수 있다는 이점이 있다

    위에서 나온 typescript 고유의 자료형에는,
    아직 any 밖에 없다.
    
    (any 는 js 중에서, 
    아무런 자료형으로도 변형할 수 있다고 선언 것과 같다.
    기존의 js 문과 비슷한 맥락으로 동작한다)
*/

// 2*. tuple

let Any_Array: any[] = []
let Number_Array: number[] = []
/* 
ㄴ> 이런식으로 array 내의 element 의 자료형을 정해줄 수도 있다
*/

let user: [number, string] = [1,'Ereh']
/*
    위의 예시는,

    typescript 의 고유 자료형인, tuple 입니다
    
    tuple 은,
    지정된 자료형을 지닌 element 만으로만 구성된 array 를 뜻한다.
*/

// 3*. enum

// const small = 1
// const medium = 2
// const large = 3

// PascalCase
const enum Size { small=1, medium, large }
let mySize: Size = Size.medium
console.log(mySize)

/*
    위의 예시는,

    typescript 의 고유 자료형인, enum 입니다
    
    enum 은,
    선언되어지는 변수들을 enum 이란 자료형 안에 담아주는 자료형이다.
*/

// 번외) Function

let Function_box = (input: number, check:number): number =>{
    if(check > 0){
        return input*2
    }
        return input*0
}

/*

    이처럼 typescript 에서는,

    parameter 의 자료형을 임의로 지정해줄 수도 있으며,
    또한! 
    return 값에 대한 자료형을 지정해 줄 수 있다

    ( *단, return 값이 없다는 것을 지정하게 될시엔
    void 를 달아주면 된다 )
    
*/

Function_box(1,2)
// Function_box(1,2,3)
// ㄴ> 에러남

/*

    또한!
    typescript 는 strict 하기 때문에,

    function( 함수 ) 의 지정된 parameter 수에
    초과한 혹은 미흡한 만큼의
    argument 를 넣을 수 없다

*/

let Function_box_renew = (input: number, check?: number): number => {
    if( check||-1 > 0){
        return input*2
    }
        return input*0
}

Function_box_renew(1)

/*
 단, parameter 에 ? 를 추가 기입하면,
 optional 하게 해당 parameter 를 사용할 지 안할지를
 정할 수 있는 자율성을 부여해준다

 그렇게 되면,
 기입해야되는 arguemnt 의 숫자적 제약이 비교적 자유로워진다

 그러나, ? 를 통해 준 자율성에서,
 값이 정해지지 못한다면,
 ( 값이 undefined 로 정의되어지면서 ) 에러를 일으킨다

 고로, parameter 에 optional 한 선택지를 쥐어주더라도
 default 값을 꼭 쥐어주자

*/

 // 번외) Object

  let employee = { id: 1};
//  employee.name = 'Ereh';
//  ㄴ> js 에서 유효하던 문법
//  그러나, ts 문법에선 에러를 일으킨다

let employee_strict_option:{
    id: number,
    name: string,
    retire: (date:Date)=> void
} = {
    id: 1,
    name: 'Ereh_kim',
    retire: (date:Date)=>{
        console.log(date)
    }
}

/*

이처럼, typescript 에서는

객체 내의 property 에서도,
자료형을 지젇해 줄 수 있다

( *method 를 지정해 줄 때에도,
method 내의 parameter 의 자료형을 지젇해 주는 것은
반드시 행해져야 된다 )
*/

/*

그러나, 위의 array 나 function 처럼
ts 문법은 strict 하기 때문에,

자료형을 지정한 property 만큼,
그에 상응하는 property 를 매칭시켜줘야 한다

*/

let employee_renew_option:{

    id: number,
    name?: string
} = {
    id: 1
}

employee_renew_option.name = 'Ereh'

/*

단, 위에서 본 function 에서 처럼
? 를 기입해주면, optional 하게 property 를 기입할 수 있게 된다

위의 예시는,
처음서부터 name property 를 비운채로 만든 객체 데이터다

*/

let employee_readonly_version:{
    readonly id: number,
    name: string
} = {
    id: 21,
    name:'Erehkim'
}

// employee_readonly_version.id = 30
// ㄴ> readonly 로 인해, 에러발생


/*

property 를 비교적 자유롭게
기입 하거나 변경 하게 될 순 있지만,

어떠한 경우에는,
오직,
객체 데이터에 대해서 읽기만을 원할 수 있다

이때,
readonly modifier 를 이용한다

사용하게되면,
객체의 property 값에 접근할 순 있어도,
변경할 수 없게 된다

*/

/*

typescript 에는,

1*- type aliases
2*- unions and intersections
3*- type narrowing
4*- nullable types
5*- The unknown type
6*- The never type

   typescript 고유의 자료형들이 더 있다
*/

// 1*. type aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date)=>void
}

let employee1: Employee ={
    id: 1,
    name: 'ErehKim',
    retire: (date:Date)=>{
        console.log(date)
    }
}

/*
    객체를 매번 선언하기에는 다소 버거움이 존재한다.

    그렇기에,
    type aliases 를 통해서,
    
    새롭게 생성하고자 하는 혹은
    다른 변수로써 저장되는 객체의
    
    자료형 및 틀을 임의로 만들고
    그것을 또 다른 객체에 지정해줄 수 있다

*/

// 2*. unions and intersections

// 2*-1. union types

let weight: number | string = 30;
weight = '30'

function kgToLBs(weight: number | string): number{
    
    if(typeof weight === 'number'){
        return weight * 2
    }
    else{
        return parseInt(weight) * 2.2
    }
}

kgToLBs(weight);

/*
    위의 예시는,

    typescript 의 고유 자료형인, union 을
    적용시킨 function 입니다
    
    union 은,
    하나의 변수 혹은 function 의 하나의 parameter 에
    자료형을 한가지 이상 지정해 줄 수 있는 자료형입니다
*/

// 2*-2. intersection types

