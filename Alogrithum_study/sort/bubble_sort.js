
// 정렬이 되어 있지 않은 배열을 하나씩 switch 해서 
// 순차적인 순서가 될 때까지 정렬하는 알고리즘 => '버블정렬'

// 빅오 는 n*(n-1) 로써, 결과론적으로 n*2 이 된다.

let UnSortedArray = [ 3, 5, 2, 4, 1 ]

function Bubble_Sort ( input ){

    let CousumedTime = 0;

    for(e=0; e<input.length-1; e++){

    for(i=0; i<input.length; i++){

        CousumedTime++

        if( input[i] > input[i+1] ){

            let Stamp = input[i]
            input[i] = input[i+1]
            input[i+1] = Stamp

        }

    }}

    const Output = {
        sorted: input,
        consumedTime: CousumedTime 
    }

    return Output

}

console.log(Bubble_Sort(UnSortedArray))