"use strict";
/*
    class, type, interface 를
    다양한 타입으로 재사용 가능하게끔 하는 것
    
    =>  Generic
*/
function getSize(arr) {
    // console.log(arr.length)
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ['a', 'b', 'c'];
getSize(arr2);
/*

위의 function 처럼,
기입하는 type 이 한없이 늘어만 갈때,
지정해둔 변수의 type 의 유연성을 필요로 할때,

generic 을 활용합니다

*/
function getSize_generic_ver(arr) {
    console.log(arr.length);
    return arr.length;
}
const arr1_generic_ver = [1, 2, 3];
getSize_generic_ver(arr1);
const arr2_generic_ver = ['a', 2];
getSize_generic_ver(arr2_generic_ver);
let New_Mobile_1 = {
    name: 'apple_phone',
    price: 1,
    option: 'yellow'
};
let New_Mobile_2 = {
    name: 'samsung_phone',
    price: 2,
    option: {
        color: 'red'
    }
};
// ㄴ> 위의 예시는,
//     instance 를 생성할 때,
//     앞선 예시의 무슨 예시인지 모르는 문제를
//     깔끔히 해결해준다
function showName(data) {
    console.log(data.name);
    return data.name;
}
showName(New_Mobile_1);
showName(New_Mobile_2);
/*

generic 을 function 에 적용할 경우,

function 에 들어가는 property 의 타입을
유연하게 또 명시적으로 나열할 수 있다

*/
//# sourceMappingURL=index3.js.map