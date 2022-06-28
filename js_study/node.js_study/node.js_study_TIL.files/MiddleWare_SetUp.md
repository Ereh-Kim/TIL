# 0. 순서 및 개요   
   
* install express module   
* express module 을 활용한 middleware 생성   
* 생성한 middleware가 들을 port 지정   
* 생성한 middleware의 활용( url에 따른 )      
   
* * *
# 1. install express module   
   
    npm install express --save   
ㄴ> 해당 명령어를 통해 express module 을 install   
   
* * *
# 2. express module 을 활용한 middleware 생성   
   
```javascript
    
    var express = require('express');
    // ㄴ> express module 을 가져오는 코드

    var app = express();
    // ㄴ> 가져온 express module 로 middleware 를 생성하는 코드

```
   
* * *
# 3. 생성한 middleware가 들을 port 지정   
   
```javascript

    var port = 8080;
    // ㄴ> middleware 가 들을 port 변수를 정해주는 코드

    app.listen(port,()=>{
        console.log('middleware is listening port 8080!')
    })
    //  
    // |   위에서 정해준 변수를 넣어서, middleware가 들을 port를 정해주고
    // ㄴ> 성공적으로 해당 port를 듣고 있을 시, 확증을 위해 응답하는 '콜백 함수'를 넣어줘서
    
    // ㄴ> 정확히 어느 port 에서 middleware가 들을 것인지 정해주는 코드

```
   
* * *
# 4. 생성한 middleware의 활용( url에 따른 )   
   
0. **기본 포맷**      
   
```javascript

    var 조건을_주고자_하는_url = '/Request_from_client'

    var 해당_url을_접속_즉_요청할_시_주고자_하는_반응을_정리한_콜백함수 = function (req,res) {
        res.send('Here is my response of your request')
    }

    app.get(
        
        조건을_주고자_하는_url,
        
        해당_url을_접속_즉_요청할_시_주고자_하는_반응을_정리한_콜백함수)
    
```

1. **특별한 조건이 없는 url시,**   

```javascript

    app.get('/',(req,res)=>{

        res.send('Hello_World')
    })

```
**ㄴ> '/' path로 들어갔을 때 (특별한 조건이 없는 url), middleware의 라우팅을 정해준 것이다**
   
* * *
   
2. **특별한 조건이 있는 url시,**
   
* 2.1. path 에 조건을 다는 경우   
   
2.1.1. 특정 (지정된)path 에 대한 조건
   
```javascript

    app.get('/home',(req,res)=>{

        res.send('Welcome_Home!!!')
    })

```
**ㄴ> '/home' path로 들어갔을 때 ( 특정된 path가 지정되었을 때 ), middleware의 라우팅을 정해준 것이다**
   
2.1.2. 특정 (매개변수로써의)path 에 대한 조건   
   
```javascript

    app.get('/home/:visitors_name',(req,res)=>{

        res.send(`Welcome_Home!!! 
        
        ${req.params.visitors_name}`)
    })
   
```
**ㄴ> 매개변수로써 들어가는 path 에 대해서, middleware의 라우팅을 정해준 것이다**   
**ㄴ> ! `매개변수로써 들어가는 path` 는 `req.params`를 통해 접근할 수 있다 !**   **('req.params' 사용시 객체값을 반환 받는다, 고로 직접적으로 해당되는 key값을 통해서 조회해야 희망하는 value 값에 접근 할 수 있다)**   

* 2.2. query string 에 조건을 다는 경우   
   
2.2.1. 특정 (지정된)query string 에 대한 조건
   
```javascript

    app.get('/home?visitor=father',(req,res)=>{

        res.send('Welcome_Home!!! Dad!!!')
    })

```
**ㄴ> '?visitor=father' query string으로 들어갔을 때 ( 특정된 query string이 지정되었을 때 ), middleware의 라우팅을 정해준 것이다**
   
2.2.2. 특정 (매개변수로써의) query string 에 대한 조건   
   
```javascript

    app.get('/home/stranger_entered',(req,res)=>{

        res.send(`identify yourself stranger ${req.query.id} !!!`)

    })
