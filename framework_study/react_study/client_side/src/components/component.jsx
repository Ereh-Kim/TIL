import React from 'react';
import js_file from 'components/Say_hi.js';
import Extra_Dom from 'components/Extra_Dom.jsx';
import 'components/Test.css';

class Test extends React.Component{

    state = {
        property_1:1,
        property_2:2,
        property_3:js_file,
        property_4:Extra_Dom,
        property_5:[
            {id:1,name:'tag1'},
            {id:2,name:'tag2'},
            {id:3,name:'tag3'}
        ]
    }
    // ㄴ> 이처럼 component 안에 property를 더할수도 있다.
    // ㄴ> 여기서 state property는 고정값이다

    test = {
        test: '150'
    }

    ereh = {
        name : 'kim'
    }
    // class 를 사용하기 때문에,
    // '=' 연산자를 활용해서 class 의 property 를 추가할 수 있는
    // class field 문법을 적용할 수 있다
    //
    // 고로 위의 두 선언(property)는 대체로 통영되지 않지만 맞는 문법이다

    state_function(){
        const { property_1 } = this.state;
        // ES6 문법 통해서, 해당 변수를 가져올 수 도 있음
        return property_1 === 1 ? 'Read_state_By_function' : 'You failed_read_state_by_function'
    }
    // 위에 두개의 방식으로 componenet 안에 property 역할의 method 또는 더 나아가는 property를 추가할 수 있다
    // 또한 this를 통해 component 내에서 서로 변칙적이고 효율적인 bundler역할의 property||method를 구성할 수 있다

    click_event(){
        alert('testing_clickevent')
        // console.log(this.state.property_1)
        // ㄴ> constructor + super를 통해서 property에 접근하지 못하는 변수는 에러가 남
        console.log(this)
        // ㄴ> constructor + super 통해서 this property에 대한 접근을 허용함

        //ㄴ> '브라우저/client'에서 state property에 대한 접근 권한 없음 => undefined로 나옴
        //ㄴ> 이유: method 방식에서는 접근할 수 있지만,
        //          function 방식에서는 접근할 수 없음
        //ㄴ> 결론: method 방식을 통해서 this 의 property 에 접근해야함
    }
    
    click_event_Arrow_Version = () => {
        console.log('Did with Arrow_function',this)
    }

    Accessing_State = () => {
        this.setState({ property_1: this.state.property_1 + 1 })
        //ㄴ> state property 내에서의 변화를 다음 array_function을 통해 이끌어냄
    }

    // constructor(){
        // super();
        // this.click_event = this.click_event.bind(this)
        //ㄴ> 해당 property의 function이 동작할 수 있게끔 this의 접근을 허용하는 consturctor 내의 method임 = bind()
        // constructor 에서만 this의 property에 접근 가능함
    // }
        //ㄴ> '브라우저/client'에서 property에 대한 접근 해결책 => constructor method
        //ㄴ> super constructor 필요

    render(){
        // Component 에 render method 만 react element 랜더링을 위해 쓰이는 이유는,
        // ReactDom 객체에 내장된 render method 가 
        // Component 의 render method 이외에 새롭게 추가하는 method 의 return jsx( react element ) 값이 전달되지 않기 때문이다

        return (
        <React.Fragment>
        <h1>Testing</h1>

        <p className="Test_class">Testing_className_section</p>
        
        <p>{this.state.property_1}</p>
        {/* ㄴ> 해당 componenet 내의 property에 해당되는 표현들(method||더 나아간 property)을 불러올 수 있다 */}
        <p>{this.state_function()}</p>
        {/* ㄴ> component의 method 안에서는, 위의 두 표현식처럼, 변수를 포함시에는 { 변수 }로 표현되어야 한다 */}

        <ul>{this.state.property_5.map(tag=><li key={tag.id} value={tag.name}>{tag.name}</li>)}</ul>
        {/* react 안에서는 이런식의 표현식을 써야된다 */}
        {/* key 태그를 통해 어떤 태그인지를 구분하고,  */}
        {/* array형식의 property 안에서는 map method를 적용함 */}

        
            <div>
            {this.state.property_5.map(tag=>
                
                <Extra_Dom key={tag.id} value={tag.name}>

                <p>test</p>

                </Extra_Dom>)}
        </div>

        {/* ㄴ> 다른 jsx 파일을 import해서 추가할 수도 있다 */}
        
        {/* <script>{this.property_3}</script> */}
        {/* ㄴ> js_file 또한 가져올 수 있다 ㄷㄷ */}

        <button onClick={this.click_event}>Using_constructor</button>

        <button onClick={this.click_event_Arrow_Version}>Using_arrow_version</button>
        {/* 그러나... property를 arrow function으로 지정하면
         constructor를 이용한 접근 허용 절차를 복잡하게 
         별도로 지정하지 않아도 된다... ㅠㅠ

        그러면 왜? ㅠㅠ constructor를 쓰는 거지? ㅠㅠㅠㅠㅠ  */}

        <button onClick={this.Accessing_State}> Accessing_State </button>

        </React.Fragment>
        //ㄴ> 해당 React.Fragment 태그는 여러 element들을 하나로 묶는 역할을 한다
        )
        //ㄴ> jsx 표현식은 단 하나의 element를 보내야 함이 여기서도 적용
    }
}
// react의 component 변수를 사용하면 
// 템플릿을 손쉽게 분리해서, source.js에서 import 할 수 있다 

// import 할시 render 함수의 return을 기준으로 (템플릿 구성) 생각하면 편하다

// jsx component 는 div 태그 안에서 하나로 묶을 수 있다 ( 보통은 태그들을 react.fragment 로 묶는다 )

export default Test