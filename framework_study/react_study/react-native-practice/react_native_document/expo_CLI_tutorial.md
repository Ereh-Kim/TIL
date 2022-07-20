## 1. expo-CLI
   
**특징**   
1. 여러 기능들을 구현하기에 더 쉅게 구성되어있다   
2. third-party-service 이기에, 의존성이 생긴다( 단, 언제든 react-native-CLI 로 넘어갈 수 있다 )   
   
**start-up**   
   
1. install expo-CLI package   
2. expo server set-up   
3. App.js custom 통해서 mobile application '본격적으로' 시작하기
   
### 1. install expo-CLI package   
   
    npm install -g expo-cli    
   
### 2. expo server set-up
   
    expo init 내_react_native_application_명   
   
ㄴ> 이 때, 만들어진 app.json 파일은 app store 와의 직접적인 데이터를 기재/수정 할 수 있는 데이터를 다루는 파일이다.
   
### 2. - 번외)   
   
- react-native module 에 대한 에러 발생시

* npm install , yarn install 을 명령어를 통해,
* dependencies 에 포함된 package 들을 install 할 수 있다.
   
### 번외) ios/andriod development Tool at Window
   
* Andriod -> andriod 에서 제공하는 'andriod studio' simulator 프로그램   
   
* Ios -> Apple 에서 제공하는 'Xcode' simulator 프로그램
ㄴ> 단) 'Xcode' 프로그램은 window 버전을 출시하지 않았기에,    Mac 등 Apple hardware 가 아닌 이상 구동되지 않는다.   

   
### 3. 

## 2. react-native-CLI   
   
**특징**   
1. 다른 native source code 와 통합하기에 용이하다   
2. expo-CLI 에 비해 편리함이 떨어진다