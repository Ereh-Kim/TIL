package package_1;
// ㄴ> 아래에 기재된 class 가
//  어디에 속해있는가를 표현하는 코드입니다

public class App {
    public static void main(String[] args) throws Exception {
        //ㄴ> public( method ) : 다른 프로그램에서 접근 가능함을 표현
        //ㄴ> static : 
        //ㄴ> void ( method ) : 해당 method 는 return 값이 없음을 표현
        
        byte age = 30;
        //ㄴ> ( 뒤에서 설명이 더 자세하겠지만 )
        //     byte 은 변수가 number type 임을
        //     정의 및 표현함

        int large_Number = 123456789;
        int improved_Large_Number = 123_456_789;
        //ㄴ> 위의 예시처럼,
        //    표현하고자 하는 수가 크면,
        //    더 나은 가독성을 위해 
        //    '_'로 나눌 수가 있다

        long large_Number_withL = 312_456_789_3L;
        float price = 10.99F;
        //ㄴ> 자료형에 적합한 수임에도,
        //    위의 보기처럼,
        //    F | L 을 달아야만
        //    변수의 자료형을 적합하다고 판단하고
        //    읽는 경우도 있다

        char letter = 'A';
        String myText = "Hello";
        boolean reveal = true;
        
        System.out.println(age);
        //ㄴ> System ( class ) : 
    }
}

/*
 * java 의 자료형은 크게 다른 두 자료형으로 나뉜다
 * 
 * Primitive Types
 * 
 * 이 있다
 * 
 * Primitive Types 에는
 * 
 *  byte    short     int     long   
 * 1byte  - 2byte  - 4byte  - 8byte 
 *  순으로 소수점이 없는 number 자료형이 있는가 하면,
 * 
 *  float   double
 *  4byte - 8byte
 *   순으로 소수점이 있는 number 자료형이 있고,
 * 
 *  char       string
 *  2 byte  -  
 *  로 1 하나의 문자열 혹은 여러 문자열을 나타내는 자료형이 있으며,
 * 
 *  boolean
 *  1byte
 *  로 true/ false 를 나타내는 자료형이 있다
 * 
 */