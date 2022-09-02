# 0. 순서 및 개요   
   
1. install passport, passport-local module   
2. passport module 과 session 의 연동 선언 및 설정   
3. 세부 local-strategey 작성 및 선언   
4. passport local strategy 필수 선언 ( serialize, deserialize 선언하기 )   
5. passport local strategy 를 적용할 url 선언/설정   


# 1. install passport, passport-local module   
   
    npm install passport --save   
   
    npm install passport-local --save   
   
ㄴ> 해당 명령어를 통해, passport와 passport-local module을 install   
   
* * *
   
# 2. passport module 과 session 의 연동 선언 및 설정   

``` javascript
    
    var passport = require('passport')
    
    app.use(passport.session())
    
    //ㄴ> 해당 선언을 통해,
    //
    //    미들웨어 전역에
    //    passport 와 session 을 연동할 미들웨어를 선언/설정했다
    //    passport 와 session 을 연동했다 봐도 무방하다

    app.use(passport.initialize())

    //ㄴ> 해당 선언을 통해,
    //    미들웨어 전역에
    //    passport 의 초기화를 진행했다

    //ㄴ> 초기화된 상태에서 코드를 읽는 것이 이상적이기 때문에,
    //    꼭 진행되어야 하는 선언이다


```
   
* * *
   
# 3. 세부 local-strategy 작성 및 선언   
   
```javascript


    /* 1. Local_Strategy 생성자 함수 가져오기 */

    var Passport_Local_module = require('passport-local')
    //ㄴ> 해당 선언을 통해, passport-local module 을 변수로써 가져오고

    var Local_Strategy = Passport_Local_module.Strategy
    //ㄴ> Local_Strategy 를 생성하는 함수( 생성자 )를 변수로써 가져왔다   



    /* 2. Local_Strategy parameter 에 기입할 전략 짜기 */

    var 커스텀한_Local_Strategy = function( 대체할 input 의 name_1, 대체할 input의 name_2, done){
        
    // 세부 인증 전략을 써 놓고
    if(
        // 사용자가 데이터베이스를 통해 인증됨
    )
    { done(null,데이터베이스를_통해_인증된_사용자) }

    else{
        // 사용자가 데이터베이스를 통해 인증 되지 않음
    done(null,false,{message: 'Wrong_user'})
    }

    }

    /* 3. 대체할 input의 name 정보가 담긴 객체 지정/생성 */

    var input_대체정보가_담긴_객체자료 = {usernameField: '대체할 input 의 name_1', passwordField: '대체할 input의 name_2'}

    /* 1+2+3. 세가지 요소들을 혼합해서 local strategy 를 지정/설정 */

    passport.use(
        
        new Local_Strategy(

        input_대체정보가_담긴_객체자료
        ,
        커스텀한_Local_Strategy

        )

    )
```
ㄴ> 해당 선언을 통해, passport 에서 활용할 local strategy( 인스턴스 ) 를 지정/설정해주었다   
   
* * *
   
# 4. passport local strategy 필수 선언 ( serialize, deserialize 선언하기 )   
   
```javascript

var serialize_과정 = function(user,done){
   
   done(null,user)
    //user 데이터를 반환하기 때문에, done을 매개변수로써 가져가야 된다
}

passport.serialize( serialize_과정 )


var deserialize_과정 = function(user,done){

    done(null,user)
    //user 데이터를 반환하기 때문에, done을 매개변수로써 가져가야 된다
}

passport.deserialize( deserialize_과정 )

```
   
* * *
   
# 5. passport local strategy 를 적용할 url 선언/설정   
   
```javascript

var 인증방식 = 'local'

var 인증시_redirect = 
{   successRedirect: '/',
    failureRedirect: '/login_fail'}

app.post('/local_strategy_적용할_url',()=>{

    passport.authenticate( 인증방식, 인증시_redirect )

})
```   
해당 선언을 통해서, /local_strategy_적용할_url 에서 local strategy 를 사용할 것을 선언

**ㄴ> 인증시_redirect가 필요한 이유는**   
**경우에 따른 랜딩 페이지 redirect 를 지정함으로써,**   
**client가 인증에 관해 승인 되었음을 확인하는 절차를 보여주게끔 한다**   
   
**input 혹은 form 태그에 /local_strategy_적용할_url 를**   
**action = "local_strategy_적용할_url" 를 추가해야 문제없이 적용된다**