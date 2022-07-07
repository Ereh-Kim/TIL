import React, {Component} from "react";
import Updater from "react_lifecycle_practical_practice/update.jsx"

class Mount extends Component {

    constructor(props){
        super(props)
        // 부모 클래스의 생성자를 호출
        // 있어도 되고 없어도 되지만, 
        // 부모 클래스의 속성을 활용하고자 한다면 꼭 있어야 한다
        // console.log('App-constructor -1 ', 'app 을 구성하는 property 및 method 를 업데이트')    
    }

    state = {
        default : 1,
        renewed_Default : 'undefined'
    }

    incement = () => {
        const incremented_default = this.state.default + 1

        this.setState({ default : incremented_default })
        this.setState({ renewed_Default : incremented_default })

        console.log(incremented_default)
    }

    componentDidMount(){
        // console.log('App-mounted -3', '랜더링 이후 자동적으로 직접적인 데이터를 불러오는 method/api')
        // 처음으로 시전되는 DOM 트리 랜더링 이후, 자동적으로 호출되는 method 이다
        // 주로 ajax 를 연동해서 쓰이는 api / method 이다

        this.setState({ renewed_Default : 0 })

    }

    componentWillUnmount(){
        console.log('uncoumt')
        //Dom 에서 현 component 가 제거될 때에 호출되는 method 이다
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log( 'this is state' , prevState)
        console.log('this is props', prevProps)
        // state 과 props 는 값이 변할 때마다/변한 후 ( 업데이트 될때마다 ) component 는 다시 새롭게 랜더링된다,
        // 이 때, 자동적으로 호출되는 method 이다.
        // 또한 state / props 의 값이 바뀔때마다 자동적으로 componentDidUpdate 함수가 호출됨

    }


    
    render(){

        // console.log('App-Rendered -2', ' app 을 DOM 노드에 직접 랜더링 ')

        return (
            <div>

            <p>this is the initial page!, your default data is 1</p>
            <button onClick={this.incement} >incement</button>
            <p> you just incremented default to 
            
            <p>you just updated default to
                
            < Updater 
            key={this.state.renewed_Default}
            value={this.state.renewed_Default}
            />

                 </p>
            
            
            </p>

            </div>
        )
    }

}

const TTest = () => {

        return <div>TTest</div>
}

export default Mount
