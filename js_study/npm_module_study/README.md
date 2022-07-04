# 0. 순서 및 개요   
   
1. node-postgresql (pg) module 에 대한 소개 및 설명   
2. install pg module   
3. postgresql database 에 연결 및 연동   
4. node-postgresql (pg) module 을 통한 postgresql query 적용 및 작용   

* * *   
# 1. node-postgresql (pg) module 에 대한 소개 및 설명   
   
>   postgresql database에 접속하고 활용하기 위해 고안된,   
>   npm module 중 하나이다.   
   
* * *
# 2. install pg module   
   
    npm install pg --save   
ㄴ> 해당 명령어를 통해, node-postgresql (pg) module 을 install   
   
* * *
# 3. postgresql database 에 연결 및 연동   
   
```javascript
    var { Pool } = require('pg')

    //ㄴ> 위 선언을 통해서, postgresql database 과 연동할 미들웨어를 생성하게 끔 하는 생성자 함수 를 가져왔다

    var 연동정보_1 = {

        user: 'db_user',
        host: 'db_host',
        database: 'db_name',
        password: 'db_password',
        port: 5432,
    
    }

    var 연동정보_2 = {

        'postgresql://db_user:db_password@db_host:5432/db_name'
    
    }

    var pool_1 = new Pool( 연동정보_1 )
    var pool_2 = new Pool( 연동정보_2 )

    //ㄴ> 연동정보(객체) 를 parameter 로 넣으면서, postgresql database 과 연동할 미들웨어를 변수로 생성/지정했다

    pool_1.connect()
    pool_1.connect()

    // ㄴ> postgresql database 과 연동할 미들웨어 에 .connect method 를 선언함으로써 postgresql database 와 연동하게 되었다

```
* * *
# 4. node-postgresql (pg) module 을 통한 postgresql query 적용 및 작용   
   
```javascript

    var sqlQuery = 'SELECT * FROM db_scehma WHERE key_1 = $1'

    var sqlQuery_parameter = [ `$1_에 기입되는 데이터 ( value_1 )` ]

    var callback_function = console.log()

    pool.query( sqlQuery, sqlQuery_parameter, callback_function )
```
ㄴ> .query method 를 통해서, postgresql query 를 때에 따라 적용해보았다