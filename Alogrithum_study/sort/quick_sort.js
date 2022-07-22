
// 배열에서 임의의 값을 기준으로 삼고,
// 그 기준값을 중심으로,

// 좌편에는 더 큰 값을,
// 우편에는 더 작은 값을,

// 나열함으로써 파티션을 계속 쪼개고 나눠서
// 정렬하는 알고리즘 => '퀵 정렬'

let UnSortedArray = [ 3, 5, 2, 4, 1, 9, 10 ,11]

function Quick_Sort( input ){

    if(input.length<2){
        return input
    }
    // 재귀함수가 지속되지 않게끔 하는 컨디션 if 문

    const Smaller_Group = []
    const Bigger_Group =[]

    const RandomValue = Math.floor(Math.random()*input.length-1)   
    const CompareValue = input[RandomValue]

    const Standard_Group = [CompareValue]

    for(i=0; i<input.length; i++){
        
        if( input[i] < CompareValue ){
            Smaller_Group.push(input[i])
        }
        else if ( input[i] > CompareValue){
            Bigger_Group.push(input[i])
        }
    }

    console.log(
        {Smaller_Group:Smaller_Group,
        Standard_Group: Standard_Group,
        Bigger_Group: Bigger_Group}
    )

    const output = Quick_Sort(Smaller_Group).concat(Standard_Group,Quick_Sort(Bigger_Group))
    
    //                  ㄴ>  계속 smaller || bigger 그룹으로 나누다가,
    //                       더이상 나눌 수 없는 시점에서 합쳐진다.

    //                  ㄴ>  재귀함수로 구현한 덕에, 순차적인 정렬이 되기까지 지속한다

    return output

}




console.log(
    Quick_Sort(UnSortedArray)
)


