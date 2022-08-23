
/* 
    class, type, interface 를 
    다양한 타입으로 재사용 가능하게끔 하는 것
    
    =>  Generic
*/

function getSize(arr:number[]|string[]){
    // console.log(arr.length)
    return arr.length
}

const arr1 = [1,2,3]
getSize(arr1)

const arr2 = ['a','b','c']
getSize(arr2)

/*

위의 function 처럼,
기입하는 type 이 한없이 늘어만 갈때,
지정해둔 변수의 type 의 유연성을 필요로 할때,

generic 을 활용합니다

*/

function getSize_generic_ver<T>(arr:T[]){
    console.log(arr.length)
    return arr.length
}

const arr1_generic_ver = [1,2,3]
getSize_generic_ver<number>(arr1)

const arr2_generic_ver = ['a',2]
getSize_generic_ver(arr2_generic_ver)

/*

    위의 예시는,
    generic 을 활용해서,

    배열의 element 에 유연성을 더해,
    비교적 자유로운 function 을 구성한 것입니다

    generic 은
    <>중괄호 를 통해,

    타입을 제한하거나,
    타입의 선택지를 열어주는 등의

    역할을 합니다

    더불어,
    타입을 명시한 채로
    유연성을 더해야 되는 상황이 오기도 때문에
    기용되기도 합니다

*/

interface Mobile_option_unreveal {
    name: string;
    price: number;
    option: any;
}

let New_Mobile_1: Mobile_option_unreveal = {
    name: 'apple_phone',
    price: 1,
    option: 'yellow'
} 

// ㄴ> 위의 예시는,
//     instance 를 생성할 때,
//     option 이 무슨 타입인지 모르는 문제가 있다

interface Mobile_option_reveal<T> {
    name: string;
    price: number;
    option: T
}

let New_Mobile_2: Mobile_option_reveal<object> = {
    name: 'samsung_phone',
    price: 2,
    option: {
        color: 'red'
    }
}

// ㄴ> 위의 예시는,
//     instance 를 생성할 때,
//     앞선 예시의 무슨 예시인지 모르는 문제를
//     깔끔히 해결해준다

function showName<T extends {name: string}>(data:T){
    console.log(data.name)
    return data.name
}

showName(New_Mobile_1)
showName(New_Mobile_2)

/*

generic 을 function 에 적용할 경우,

function 에 들어가는 변수의 타입을
* 제한하거나
* 유연하게 추가하여
명시적으로 나열할 수 있다

*/