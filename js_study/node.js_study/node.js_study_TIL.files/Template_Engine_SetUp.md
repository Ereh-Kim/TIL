# 0. 순서 및 개요   
   
* 1. express.static 함수를 활용한 Template_Engine_SetUp      
   
    * 1.1. express.static 함수를 활용한 정적 폴더 지정   
   
    * 1.2. 미들웨어가 지정한 정적 파일 ( html )을 랜더링하게끔 라우팅하는 방법    
       
       
* 2. ejs module 을 활용한 Template_Engine_SetUp   
   
    * 2.1. install ejs module   
       
    * 2.2. ejs 템플릿 사용/활용 선언   
       
    * 2.3. 미들웨어가 지정한 정적 파일 ( ejs )를 랜더링하게끔 라우팅하는 방법   
           
   
* * *
# 1. express.static 함수를 활용한 Template_Engine_SetUp   
   
    * 1.1. express.static 함수를 활용한 정적 파일 지정   

```javascript
    app.use(express.static('정적_폴더로_사용할_폴더_명'))   
```
ㄴ> 해당 선언을 통해, server 전역에 활용할 정적 폴더를 지정/선언하였다
   
**ㄴ> app.use 는 대개 mounting(저장 장치에 접근하는 경로를 편입시키는 과정) 을 위해 쓰이는 method 이다**   
**ㄴ> 즉, 대개 전체적인 스케일의 경로로 편입시키고자 할때 쓰이는 코드이다**   
**ㄴ> 경로는 default로 root path 로 전역에 적용된다고 생각하면 된다**   
   
    * 1.2. 미들웨어가 지정한 정적 파일 ( html )을 랜더링하게끔 라우팅하는 방법   
   
```javascript
    app.get('/express_static_template',(req,res)=>{
        res.sendFile(__dirname+'/정적_폴더로_사용할_폴더_명/보여주고자하는_html_파일.html')
    })
```   
ㄴ> 해당 선언을 통해, 특정 url 에 정적 파일( html )을 랜더링하게끔 설정했다
    
   
**ㄴ> res.sendFile 은**   
**보여주고자 하는 html의 절대 경로를 넣어,**   
**해당 html을 랜더링하게끔 하는 method 이다.**   
      
**ㄴ> '정적_폴더로_사용할_폴더_명' 을 'public'으로 할시,**   
**특별히 경로에 추가하지 않아도 추가되지만, (default로 경로에 추가되지만)**   
**'public_이외에_폴더_명' 으로 하면 경로에 추가해야만 경로에 반영된다**   
      
**ㄴ> express static을 활용한 Template의 폴더 명은**   
**'정적_폴더로_사용할_폴더_명'을 따라가야 한다**   

* * *
# 2. ejs module 을 활용한 Template_Engine_SetUp   
   
    * 2.1. install ejs module
   
    npm install ejs --save   
ㄴ> 해당 명령어를 통해 ejs module 을 install
   
    * 2.2. ejs 템플릿 사용/활용 선언   
   
```javascript
    app.set('view engine','ejs')
```
ㄴ> 해당 선언을 통해, middleware 객체에 'view engine' = 'ejs' 라고 지정/선언하였다   
   
**ㄴ> app.set 은 middleware이자 인스턴스인 app에 property 값을 추가하는 method이며   이를 통해 middleware에 여러 설정들을 두루 적용 할 수 있다**  
   
**ㄴ> 위 선언을 통해서, app 객체 안에는    'view engine' : 'ejs' = key : value 의 형식으로   property가 추가되었다**   
   
    * 2.3. 미들웨어가 지정한 정적 파일 ( ejs )를 랜더링하게끔 라우팅하는 방법   
   
```javascript
    app.get('/ejs_template',(req,res)=>{
        res.render('보여주고자하는_ejs_파일명')
    })
```
ㄴ> 해당 선언을 통해, 특정 url 에 정적 파일 ( ejs )을 랜더링하게끔 설정했다   
   
**ㄴ> res.render 는 템플릿 module을 사용/랜더링 할 시에 사용되는 method 이다**   
   
**ㄴ> ejs Template의 폴더 명은**   
**'views'여야 한다**   