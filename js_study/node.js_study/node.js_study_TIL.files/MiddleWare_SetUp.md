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

    })
    //  
    // |  위에서 정해준 변수를 넣어서, middleware가 들을 port를 정해주고
    // ㄴ>성공적으로 해당 port를 듣고 있을 시, 확증을 위해 응답하는 '콜백 함수'를 넣어줘서
    
    // ㄴ> 정확히 어느 port 에서 middleware가 들을 것인지 정해주는 코드

```