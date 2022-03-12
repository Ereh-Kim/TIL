마크다운 문법 작성법 정리
========================
   
# 1. 마크다운 문법에 대한 간단한 설명 및 소개
   
   
## 1.1. 마크다운 너는 누구냐...   
   
깃헙 저장소에서 각광 받으면서   
점차 쓰이게 된 마크업 언어로,   
   
대표적인 쓰임세로는   
모듈 설치 방법을 설명하거나,   
소스 코드를 설명하거나 등   
개발과 관련된 기록과 공유 기능에 집중되어 쓰여지고 있다.
   
***
# 2. 마크다운 사용법

   
* 큰 제목
* 작은 제목
* 기타 글머리
* 블록 인용문자
* 순서있는 목록
* 순서없는 목록
* 코드
    * 들여쓰기
    * 코드블럭
* 수평선
* 링크
* 강조
* 이미지
* 줄바꿈

***

* ## 큰 제목
   
   
>   ##### View:   

큰 제목입니다
============
   
   
>   ##### Code:   

    큰 제목입니다   
    =============   
***
   
* ## 작은 제목
   
>   ##### View:   

작은 제목입니다
--------------
   
>   ##### Code:   

    작은 제목입니다   
    --------------   
***
   
* ## 기타 글머리
   
>   ##### View:   

# This is a H1   
## This is a H2   
### This is a H3   
#### This is a H4   
##### This is a H5   
###### This is a H6   
   
>   ##### Code:   

    # This is a H1   
    ## This is a H2   
    ### This is a H3   
    #### This is a H4   
    ##### This is a H5   
    ###### This is a H6   
***

* ## 블럭 인용문자
   
>   ##### View:   

> This is a first blockqute   
>   >   This is secound blockqute   
>   >   > This is third blockqute   
   
>   ##### Code:   

    > This is a first blockqute   
    >   >   This is secound blockqute   
    >   >   > This is third blockqute   

***
   
* ## 순서있는 목록
   
>   ##### View:   

1. 첫번째   
2. 두번째   
3. 세번째   
   
>   ##### Code:   

    1.첫번째   
    2.두번째   
    3.세번째   

    
***
   
* ## 순서없는 목록
   
>   ##### View:
   
- 시험중   
* 시험중   
+ 시험중   
   
>   ##### Code:   

    - 시험중   
    * 시험중   
    + 시험중   
   
***
   
* ## 코드   
>   * #### 들여쓰기
>   * #### 코드블럭   
***

* #### 들여쓰기   

>   ##### View:   

this is a normal paragraph   

    this is a code block   

end code block   

>   ##### Code:
   
    this is a normal paragraph   
        this is a code block   
    end code block   

***   

* #### 코드블럭    

>   ##### View:   

<pre>
Start
<code>
Up
<p>My Sentence</p>
Down
</code>
End
</pre>
   
>   #### Code:   

    <pre>   
    Start   
    <code>  
    Up    
    <p>My Sentence</p> 
    Down  
    </code>   
    End   
    </pre>   

>   #### View:   

```javascript
function Test_Code(){
    console.log('Hello_World')
}
```   

>   #### Code:   

    ```javascript
    function Test_Code(){
        console.log('Hello_World')
    }
    ```   

***

* ## 수평선   

>   #### View:   

* * *   
***   
*****   
- - -   
-----------------------------------------------   

>   #### Code:   

    * * *   
    ***    
    *****   
    - - -   
    -------------------------------------------   
   
***

* ## 링크   

>   #### View:   

[Google][link]   

[link]: https://google.com "Google_Link"   

>   #### Code:   

    [Google][link]   

    [link]: https://google.com "Google_Link"  

***   

* ## 강조   

>  #### View:   

*single astericks*   
_single underscores_   
**double astericks**  
__double underscores__   
~~cancelline~~

>   #### Code:

    *single astericks*   
    _single underscores_   
    **double astericks**   
    __double underscores__   
    ~~cancelline~~   

***   

* ## 이미지   

>   #### View:   

<img src="" width="100px" height="100px">   
<img src="" widht="50%" height="50%">   

>   #### Code:   

    <img src="" width="100px" height="100px">   
    <img src="" widht="50%" height="50%">   

***   

* ## 줄바꿈   

>   #### View:   

Example 1   
Example 2   

>   #### Code:   

    Example 1   
    Example 2   

**유의사항: 줄바꿈은 바꾸고 싶은 문장줄의 마지막에서 3칸이상 띄어쓰기를 해야 적용이 된다**   

***