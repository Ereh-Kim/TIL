package package_1;

import java.util.Date;
import java.awt.Point;

public class App2 {
    public static void main(String[] args){

        Date now = new Date();
        System.out.println(now);
        //ㄴ> 위의 예시처럼,
        //    여타 다른 class 들을 import 해와서,
        //    값을 참조할 수 있다

        Point point1 = new Point( 1, 1);
        Point point2 = point1;
        point1.x =2;
        System.out.println(point2.x);
        //ㄴ> 위의 예시처럼,
        //    java 는 js 와 다르게 변수에 class값 자체를 저장하지 않고,
        //    참조값에 index 만을 추가한 것처럼,
        //    참조값이 되는 class 의 field 및 method 의 값이 변하면,
        //    참조한 변수값 또한 바뀐다
            
    }
}

/*
 * 
 * Reference Types
 * 
 * 위의 예시로 미리 다룬 것처럼,
 * reference type 은,
 * 
 * 변수가
 * Date, Point ( 이외에도 int[], String ) 처럼
 * 특정 자료형을 참조해서, 
 * 특수한 자료형을 가지게 되거나,
 * 
 * 기존의 자료형을 가진 변수를 참조해서,
 * 자료형을 갖추는 경우가 있다
 * ( 다만, 이 경우는 class 의 변동사항이
 *  참조하는 변수에게도 영향을 줌으로 주의해야 한다 )
 */

