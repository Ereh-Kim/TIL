# github repository 특정 폴더 접근 불가능/제한 error   

## 상황 & 이유     
    상황: github의 repository 특정 폴더에 접근 불가능한 상황   
    이유: 해당 접근 불가능한 폴더 내와 해당 파일의 상위 폴더에 .git 폴더가 존재하기 때문   

## 해결방안 & 구체적 메뉴얼
    해결방안: 해당 접근 불가능한 폴더 내의 .git 파일 삭제   
    
    구체적 메뉴얼:    
    0. rm -rf .git (커맨트) 통해서 접근 불가능한 폴더 내에 .git 파일을 삭제   
    1. rm --cached . -rf (커맨드) 통해서 해당 스테이지의 파일을 제거   
    2.    
    * git add (접근 불가능했던 폴더)   
    * git commit -am "solve_access_problem"   
    * git push 내_저장소 내_branch   

    순으로 해결