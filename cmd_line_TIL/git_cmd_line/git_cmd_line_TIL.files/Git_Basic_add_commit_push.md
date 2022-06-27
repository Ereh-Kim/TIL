# 0. Git_Basic   
   
**깃 배포에 있어서의 가장 기본적인 과정과**   
**그에 필요로 하는 명령어들을 나열 및 정리할 것이다**   


* * *
# 1. Git_Basic_Process   
   


    1. Set_Up => 2. add => 3. commit => 4. push 순이다
   
   
   
**1. Set_Up 에서는**   
   
작성한 코드들을 전송할 (git의 remote repository)   
   
즉 '원격 저장소' 를 지정할 것이다   
   
   
   
   
   
**2. add 에서는**   
   
지정한 원격 저장소에 우리가 작성한 코드들을   
   
'업로드' 할 예정이다   
   
   
   
   
   
**3. commit 에서는**   
   
'업로드'된 코드들을 '제출'할 것이다   
   
이 과정에선, 코드 작성시에 바뀐 변화들을 모두 포함해 제출되어진다   
   
   
   
   
   
**4. push 에서는**   

제출되어진 코드들을 토대로   

우리가 지정한 저장소로 '주입'되어,   

결과론적으로 그리고 완성되게   
   
코드들이 우리가 지정한 저장소에 '저장'하게 된다   
      
   
   
   
   
* * *
# 2. Git_Basic_Set_Up   
   

### 2.1. 코드들을 저장할   
### ( git remote repository ) 원격 저장소 지정(=추가)   
   
   
    git remote add '우리가 붙여주는 원격 저장소의 이름' '저장소 주소'   
   
   
### 2.2. 지정된/지정되었던 원격 저장소 확인   
   
   
    git remote   
   
   
### 2.3. branch 생성(=추가)   
   
   
    git branch '우리가 만들 branch명'   
   
   
### 2.4. branch 확인   
   
   
    git branch   
   

* * *   
# 3. Git_Basic_add   
   
   
    git add .   
   
   
* * *
# 4. Git_Basic_commit   
   
   
    git commit -m   
   
   
# 번외 Git_Basic_add + Git_Basic_commit   
   
   
    git commit -am   
   
해당 명령어를 쓰면 add 와 commit 두 명령어를 같이 수행한다   
   
   
* * *
# 5. Git_Basic_push   
   
   
    git push '우리가 지정한 원격 저장소명' '만들어 놓은 branch'   
   
   