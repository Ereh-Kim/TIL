# 0. 순서 및 개요   
   
1. install express-session module   
2. 사용할 session 생성 및 설정   
   
# 1. install express-session module   
   
    npm install express-session
ㄴ> 해당 명령어를 통해, express-session module 을 install
   
# 2. 사용할 session 생성 및 설정   
   
```javascript

var session = require('express-session')

var 옵션 = {
    name : '지어줄 session 의 이름',
    secret : 'secret'

    // ㄴ> secret property는,
    //     
    //     서버에서 client 한테 전송할 ( 쿠키에 담겨진 ) sessionID 값을 
    //     암호화해서 보내도록 해준다


    resave : false,

    // ㄴ> 아무런 변경사항이 없을 때에도,
    //     
    //     session 값을 
    //     
    //     서버 포함 client (sessionID 가 포함된 쿠키를 )에
    //     (true로 해놓을 때만) 매번 저장하게끔 하는 옵션이다

    //  ㄴ> false 로 해놓으면 일회성에 그친다


    saveUninitialize : false,

    // ㄴ> 기존에 변화가 없던 session 값을 포함한,
    //     새로운 session 값들을 모두 서버에 저장하게끔 하는 옵션이다

    rolling : true,

    // ㄴ> rolling 은,
    //
    //      client session 값 (sessionID가 담긴 쿠키) 이
    //
    //      사용자가 로그아웃을 하거나 브라우저를 닫을 때 만료 되는 것이 아니라,
    //      
    //      Max-age (지속시간) 이후에 만료 되게끔 하는 옵션이다 

    cookie : 
        { maxage: 1000 * 60 * 60 * 6 }

    // rolling 옵션을 true 로 바꾼 이후에( rolling 을 true 로 해야만 적용되기 때문에 )
    //
    // cookie : { 쿠키 옵션 } 을 통해서, 
    //
    // maxage 를 활용한 지속시간을 늘려야/ 정해줘야 한다

}

app.use(session(옵션))


```
   
**resave 옵션을 대체로 false 로 하는 이유는,**   
**'서버에 부하를 줄이고자' 이서다**   
   
**saveUninitialize 옵션을 대체로 false 로 하는 이유는,**
**'서버에 저장되는 불필요한 session 값을 줄이고자' 이서다**