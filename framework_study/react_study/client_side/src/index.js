import React from 'react';
import ReactDOM from 'react-dom';
//  기본적으로 react_활용시 필요로 하는 모듈들을 가져오는 코드

import Image from './images/meat.png'
import Testing from './components/component.jsx'
// component의 jsx파일을 템플릿처럼 생각해서 가져올 수 있다
// 단 가져올 시 jsx파일 표현식을 따라야되기 때문에, 
// ReactDom.render( <변수로 가져온 jsx 템플릿/>, document.getElementById('root) )
// 한마디로, jsx파일들의 componenet => source.js으로 import 이후 render => source.html 에서 파싱

const element = (
<div>
<p>testing</p>
<img src={Image} width={100} height={100}/>
</div>)
// ㄴ> 하나의 element에 묶어서 표현

const element2 = (
  <p>testing</p>)
// ㄴ> 같은 맥락

const element3 = React.createElement('type',{property:'props`s_children_customized_property'},{test:'props`s_children_Property'},'test2')
//                                    type_property_설정, 해당 key로 property 설정,
//                                     그 뒤는 children이라는 array가 key가 되고 array 속 index에 따라서 (설정한다면)각 key-value 관계를 가짐
//                                     설정하지 않는다면 index에 따라 값들이 array에 따라 그저 들어감
// ㄴ> 객체 생성

// jsx 표현식
// React 모듈로써 가져온 변수 'React'는 react_element 생성시 대체로 필요로 함 => EX) jsx
// 모듈이자 변수인 ReactDom 은 index.html의 연결다리로써, react_element를 직접 html 파일에 렌더링하는데 대체로 사용됨

console.log(element3)
console.log(Testing)


ReactDOM.render(
<Testing />,
  document.getElementById('root')
);

