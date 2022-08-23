// Utility_type
// ㄴ> typescript 고유의
//     interface 를 활용한 data 형태이다

interface User {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'F'
    option?: any
}




// 'keyof' Keyword
/*
    ㄴ> 해당 키워드를 사용하면,
        해당 interface 의 ( property의 ) key 값을
        유니온 형태로 반환 받을 수 있습니다
*/

type Userkey = keyof User
// ㄴ> keyof User = 'id' | 'name' | 'age' | 'gender'







// 'Partial<T>' Keyword
/*
    ㄴ> 해당 키워드를 사용하면,
        해당 interface 의 property 를

        생성되는 instance 에게
        선택적으로 부여할 수 있게끔 합니다
*/

// let admin: User = {
//     id:1,
//     name: 'Boo'
// }

// ㄴ> typescript 본래 문법에서는 에러 발생

let admine_partial: Partial<User> = {
    id:1,
    name: 'Boo'
}








// 'Required<T>' Keyword
/*
    ㄴ> 해당 키워드를 사용하면,
        해당 interface 의 property 를

        생성되는 instance 에게
        무조건적으로 부여하게끔 강제합니다
*/

let admin_required: Required<User> = {
    id:2,
    name: 'Bon',
    age: 23,
    gender: 'M',
    option: 'fresh_man'
}

/* 
    ㄴ> option property 는 선택적인 property 였으나,
        required 를 통해 강제한 예시입니다.

*/







// 'Readonly<T>' Keyword
/*
    ㄴ> 해당 키워드를 사용하면,
        해당 interface 를 활용해

        생성되는 instance 의 property 는
        가져올 순 있으나 변경이 불가합니다
*/

let admin_readonly: Readonly<User> = {
    id:3,
    name: 'Bin',
    age: 26,
    gender: 'F',
}

// admin_readonly.id = 4
// ㄴ> Readonly<T> (Utillity type) 으로 인해 에러가 납니다






// 'Record<K,T>' Keyword
/*
    ㄴ> 해당 키워드를 사용하면,
        
    해당 interface 의 
    기입할 key 값의 종류와
    key 값에 매칭되어 배정받는 property 값의 type 을
    제한하여 지정해 줄 수 있다

    */

interface Score  {
'1': 'A'|'B'|'C'|'D';
'2': 'A'|'B'|'C'|'D';
'3': 'A'|'B'|'C'|'D';
'4': 'A'|'B'|'C'|'D';
}

const score: Score = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'A'
}

// ㄴ> 위의 예시는, Record<T> 를 적용하지 않은 예시이다

type Grade = 1|2|3|4

type Score_ = 'A'|'B'|'C'|'D'
//ㄴ> type 으로, interface 도 충분히 올 수 있다
//    이 예시는, 이해를 위해 쉽게 작성되었다

const Result: Record<Grade,Score_> = {
    1: 'A',
    2: 'C',
    3: 'D',
    4: 'B'
}

// ㄴ> 위의 예시는, Record<T> 를 적용한 예시이다

// 'Pick<T,K>' Keyword

