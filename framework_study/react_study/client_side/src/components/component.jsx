import React from 'react';
// import js_file from './Say_hi.js'
import Extra_Dom from './Extra_Dom.jsx'
import './Test.css'

class Test extends React.Component{

    state = {
        property_1:1,
        property_2:2,
        // property_3:js_file
        property_4:Extra_Dom
    }
    // ㄴ> 이처럼 component 안에 property를 더할수도 있다.

    state_function(){
        const { property_1 } = this.state;
        return property_1 === 1 ? 'Read_state_By_function' : 'You failed_read_state_by_function'
    }
    // 위에 두개의 방식으로 componenet 안에 property 역할의 method 또는 더 나아가는 property를 추가할 수 있다
    // 또한 this를 통해 component 내에서 서로 변칙적이고 효율적인 bundler역할의 property||method를 구성할 수 있다


    render(){
        return (
        <React.Fragment>
        <h1>Testing</h1>

        <p className="Test_class">Testing_className_section</p>
        
        <p>{this.state.property_1}</p>
        {/* ㄴ> 해당 componenet 내의 property에 해당되는 표현들(method||더 나아간 property)을 불러올 수 있다 */}
        <p>{this.state_function()}</p>
        {/* ㄴ> component의 method 안에서는, 위의 두 표현식처럼, 변수를 포함시에는 { 변수 }로 표현되어야 한다 */}

        <Extra_Dom/>
        {/* ㄴ> 다른 jsx 파일을 import해서 추가할 수도 있다 */}

        {/* <script>{this.property_3}</script> */}
        {/* ㄴ> js_file 또한 가져올 수 있다 ㄷㄷ */}

        </React.Fragment>
        //ㄴ> 해당 React.Fragment 태그는 여러 element들을 하나로 묶는 역할을 한다
        )
        //ㄴ> jsx 표현식은 단 하나의 element를 보내야 함이 여기서도 적용
    }
}
// react의 component 변수를 사용하면 
// 템플릿을 손쉽게 분리해서, source.js에서 import 할 수 있다 

// import 할시 render 함수의 return을 기준으로 (템플릿 구성) 생각하면 편하다

export default Test