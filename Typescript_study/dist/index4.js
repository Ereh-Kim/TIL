"use strict";
// Utility_type
// ㄴ> typescript 고유의
//     interface 를 활용한 data 형태이다
// ㄴ> keyof User = 'id' | 'name' | 'age' | 'gender'
// 'Partial<T>' Keyword
/*
    ㄴ> 해당 utility를 사용하면,
        해당 interface 의 property 를

        생성되는 instance 에게
        선택적으로 부여할 수 있게끔 합니다
*/
// let admin: User = {
//     id:1,
//     name: 'Boo'
// }
// ㄴ> typescript 본래 문법에서는 에러 발생
let admine_partial = {
    id: 1,
    name: 'Boo'
};
// 'Required<T>' Keyword
/*
    ㄴ> 해당 utility를 사용하면,
        해당 interface 의 property 를

        생성되는 instance 에게
        무조건적으로 부여하게끔 강제합니다
*/
let admin_required = {
    id: 2,
    name: 'Bon',
    age: 23,
    gender: 'M',
    option: 'fresh_man'
};
/*
    ㄴ> option property 는 선택적인 property 였으나,
        required 를 통해 강제한 예시입니다.

*/
// 'Readonly<T>' Keyword
/*
    ㄴ> 해당 utility를 사용하면,
        해당 interface 를 활용해

        생성되는 instance 의 property 는
        가져올 순 있으나 변경이 불가합니다
*/
let admin_readonly = {
    id: 3,
    name: 'Bin',
    age: 26,
    gender: 'F',
};
const score = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'A'
};
const Result = {
    1: 'A',
    2: 'C',
    3: 'D',
    4: 'B'
};
// ㄴ> 위의 예시는, Record<T> 를 적용한 예시이다
// 'Pick<T,K>' Keyword
/*
    ㄴ> 해당 utility를 사용하면,
        해당 interface 의 property 중에서,

        선택적으로
        property 를 가지는
        instance 를
        제한하여 생성할 수 있습니다
*/
let admin_pick = {
    id: 0,
    name: 'Bob'
};
// 'Omit<T,K>' Keyword
/*
    ㄴ> 해당 utility 를 사용하면,
        해당 interface 의 property 중에서,

        선택적으로
        제외할 property 를 지정하여
        instance 를
        제한하여 생성할 수 있습니다
*/
const admin = {
    id: 6,
    name: 'Ben'
};
//# sourceMappingURL=index4.js.map