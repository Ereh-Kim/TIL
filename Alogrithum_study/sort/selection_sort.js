
// 배열의 가장 첫 요소를 기준으로 삼고,
// 배열의 남은 값들 중에서 이후 가장 작은 요소를 탐색한다.

// 탐색이 이루어진 이후, 그 요소와 switch 가 진행되고

// 그 과정이 
//배열이 (작은 값이 순대로) 순차적으로 정렬 될 때까지
// 정렬하는 알고리즘 => '선택정렬'

// 빅오는 가장 작은 값과 큰 값을 switch 해야하기 때문에,
// 배열을 배열의 element 수 만큼 돌기 때문에 n*2 일 수 밖에 없다

let UnSortedArray = [ 3, 5, 2, 4, 1, 6 ]

function SelectionSort ( input ){

    for( i=0; i<input.length; i++ ){

    let Standard = input[i]

    let MinValue = Math.min(...input.slice(i+1))
    let MinIndex = input.indexOf(MinValue)

    if( Standard > MinValue ){

    // switching process
    input[i] = MinValue
    input[MinIndex] = Standard}

    else{
        return input
    }

    }

    return input

}

console.log(
    SelectionSort(UnSortedArray)
    )