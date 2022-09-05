package package_1;

import java.util.Arrays;

public class App3 {
    public static void main(String[] args){
        String message = "i am sending message";       
        System.out.println(message.length());
        System.out.println(message.indexOf("i"));
        //ㄴ> 위의 예시처럼,
        //    다양한 method 들을 활용해서,
        //    문자열을 구성 및 분해 혹은 편집할 수 있다.

        int[] numbers = new int[5];
        numbers[0] = 1;
        numbers[1] = 2;

        System.out.println(numbers[0]);
        System.out.println(Arrays.toString(numbers));
        
        int[] renewed_number_Array = {1,2};
        System.out.println(renewed_number_Array[0]);
    }
}

/*
 * 
 * string 과 array 는 reference type 이다
 * 그 와 동시에, class 자료형이다.
 * 
 */