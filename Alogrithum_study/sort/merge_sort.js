
// 배열의 element 가 두개 남을때까지, 나눈 이후에
// 순차적으로 합쳐나가는 정렬 알고리즘 => '병합정렬'

let UnSortedArray = [ 3, 5, 4, 2, 1 ]

function Merge(left,right){

    const result = []

    while( left.length && right.length ){

        if(left[0]<=right[0]){
            result.push(left.shift())
            
        }
        else{
            result.push(right.shift())
        }
    }

    while(left.length){ result.push(left.shift()) }
    

    while(right.length){ result.push(right.shift()) }
    

    return result

}

function Merge_Sort (input){

    if(input.length< 2 ){
        return input}

    const MiddleIndex = Math.floor(input.length/2)
    const Left_Group = input.slice(0,MiddleIndex)
    const Right_Group = input.slice(MiddleIndex)

    return Merge( Merge_Sort(Left_Group), Merge_Sort(Right_Group) )

}


console.log(Merge_Sort(UnSortedArray))

// merge sort 는
// 불러야하는 호출 횟수가 Best ( logN ) Worst ( N ) 번이고,
// 각 단계의 비교연산이 N 임으로

// Best( N * logN ) 빅오-Worst( N*2 ) 이다
