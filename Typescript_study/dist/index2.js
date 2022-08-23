"use strict";
/*

앞에서 다루지 못한
typescript 문법에 대해 다루는 ts file 이다

*/
// 1*.void
function Void_Function() {
    console.log('hello');
}
/*
주로 function 에서 반환되는 값이 없음을 표현하는 자료형을 void 라고 한다
*/
// 2*.never
function showError() {
    throw new Error();
}
function inLoop() {
    while (true) {
        // do something
    }
}
let New_user = {
    name: 'kim',
    age: 23
};
const add = function (x, y) {
    return x + y;
};
add(10, 20);
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('...go');
    }
}
const b = new Bmw('green');
// extends 를 통해, js 의 class 처럼 interface 를 확장할 수 있다
const benz = {
    door: 4,
    stop() {
        console.log('stop');
    },
    color: 'white',
    wheels: 4,
    start() {
        console.log('start');
    }
};
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
// 4*. typescript 접근 제한자 
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
class Car_access_modified {
    constructor(color) {
        this.name = 'car';
        this.private_data = 'this is not a car';
        // ㄴ> #private_data 로도 표기 가능
        this.protected_data = 'Top_secret => I am human! ';
        this.color = color;
    }
    start() {
        console.log(this.name + '...go!');
        console.log('this is my secret... pls...' + this.private_data);
    }
}
Car_access_modified.static_data = 'we`re upgrading our class';
class Bmw_access_modified extends Car_access_modified {
    constructor(color) {
        super(color);
    }
}
const z4 = new Bmw_access_modified('black');
// console.log(z4.protected_data)
// ㄴ> protected 접근 제한자로 인해, 에러가 발생
/*
ㄴ> protected 접근 제한자가
    
    자식 class 에서의,
    해당 protected 를 주석 달은 property의 상속 및 접근까지
    제어하지 않으나,

    instance 를 통한 접근을 제어하게 된다
*/
// static
console.log(Car_access_modified.static_data);
/*
ㄴ> static 을,
    
    class 의 특정 property 및 method 에 달게 되면
    
    class 자료형 임에도 전역변수의 형태로,
    method 를 호출하거나 property 값을 가져올 수끔 해준다.
*/
// 추상 class
class Car_abstract_ver {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log('start');
    }
}
class Inherit_abstract_ver extends Car_abstract_ver {
    end() {
        console.log('end is here!');
    }
    doSomething() {
        alert(3);
    }
}
let New_abstract_Car = new Inherit_abstract_ver('black');
// const car = new Car_abstract_ver("red")
// ㄴ> 추상 class 로 인해, 에러 발생
/*

ㄴ> 추상 class 는 이처럼,

class 로써 적용하면,
자식 class 를 통한 상속이 가능하지만,
직접적인 instance 생성을 제한한다

function 혹은 method 로써 적용하면,
customize 를 필요로 하는 function 혹은 method 로 제한 할 수 있다.

*/
//# sourceMappingURL=index2.js.map