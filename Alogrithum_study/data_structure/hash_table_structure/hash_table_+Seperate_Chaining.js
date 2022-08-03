/*
입력한 key 값에 따라,

미리 설계된 Hash Function ( 해쉬함수 ) 을 통해서,
반환 받게 되는 Hash (Code) 를

고유한 Index 값으로 환산하여,
특정 데이터에 접근하는 자료구조 => 'Hash Table 구조'



Hash Table 에는

'bucket' => hash table 의 단위 / 여러 'slot'의 집합체

'slot'=> ( key 값에 따른 ) 특정 Hash (Code) 에 매칭되는 값을
         실질적으로 지니는 공간 / bucket 의 단위

'hashing' => 일부 함수 또는 알고리즘을 사용하여,
             특정 데이터를 (key 값을 통해서)
             대표 정수 값에 매핑하는 과정

와 같은 개념들이 같이 쓰인다

*/

class Slot {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Hash_Table {
    constructor(Table_Size){
        this.table = new Array(Table_Size)
        this.Table_Size = Table_Size
    }

    convert_To_Index(Hash_code){
        const Index_Value = Hash_code % this.Table_Size
        return Index_Value
    }

    Hash_Function(key){
        let i=0;
        let Hash_code =0;

        while(key.charAt(i) != false){
            Hash_code = Hash_code + key.charCodeAt(i)
            i++
        }
        return Hash_code
    }

    set_Item(key, value){
        let New_Slot = new Slot(value)
        let Hash_code = this.Hash_Function(key)

        if(Hash_code > this.Table_Size*this.Table_Size){
            console.log(`잘못된 key가 입력되었습니다`)
            return;
        }

        else{
        let Index_Value = this.convert_To_Index(Hash_code)
        let Current_Bucket = this.table[Index_Value]

        if(Current_Bucket === undefined){
            this.table[Index_Value] = New_Slot
        }
        else{
            while(Current_Bucket.next != null){
                Current_Bucket = Current_Bucket.next
            }
            Current_Bucket.next = New_Slot
        }
        }
    }

    /*
    ㄴ> 위 setItem method 는 Chaining 을 차용했다

    Separate Chaining 은 
    Collision ( bucket 간의 충돌 상황 ) 이라는 문제상황이 일어났을 때,

    LinkedList 형태와 유사하게,
    해당 값을 기존의 값과 연결하는 주소를 저장함으로써,
    해결하는 방법론이다
    
    이외에도,
    Open Addressing 이란 방법론은,
    비어있는 bucket(=hash) 을 찾아 그 곳에 저장하는 방법론이다

    이 때,
    비어있는 bucket 을 탐색하는 방법론에는
    
    * Linear Probing
    * Quadratic Proding
    * Double Hashing Probing

    파생되는 문제점으로썬, delete 실행시
    삭제된 bucket 은 Dummy space 로 활용되기 때문에,
    Hash Table 을 재정리하는 작업이 필요하다

    */

    get_Item(key){
        const Hash_code = this.Hash_Function(key)
        const Index_Value = this.convert_To_Index(Hash_code)
        const Returned_Slot = this.table[Index_Value]
        
        return Returned_Slot
    }
}

const Hash_Table_Example = new Hash_Table(50)
// console.log(Hash_Table_Example.Table_Size)

Hash_Table_Example.set_Item('ErehKim',{Age:23})
Hash_Table_Example.set_Item('ErehKim',{Age:25})

console.log(Hash_Table_Example)

/*

하나의 bucket 에 slot 들이 모두 몰린다는 상황을 가정한다면,
key 값을 통해 index 에 접근한다고 해도,

linkedlist 로 구성된 bucket 의 slot 모두에 접근해야 되는
상황이 발생할 수 있음으로,

( Big O )빅오는 O(n) 이다.



그러나,

Hash Table 은 통상적으로,

Hash code 를 통해 Insert, Search, Delete 일련의 과정이

O(1) 에 수렴하게끔 디자인된 자료구조임을 인지해야 한다

*/