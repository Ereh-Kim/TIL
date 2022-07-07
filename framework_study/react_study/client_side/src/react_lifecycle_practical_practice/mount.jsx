import React, {Component} from "react";

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
        console.log(incremented_default)
    }

    componentDidMount(){
        // console.log('App-mounted -3', '랜더링 이후 자동적으로 직접적인 데이터를 불러오는 method/api')
        // 주로 ajax 를 연동해서 쓰이는 api / method 이다

        this.setState({ renewed_Default : 0 })

    }

    render(){

        // console.log('App-Rendered -2', ' app 을 DOM 노드에 직접 랜더링 ')

        return (
            <div>

            <p>{this.state.default}</p>
            <button onClick={this.incement} >incement</button>
            <p> you just incremented default to {this.state.renewed_Default} </p>

            </div>
        )
    }

}

export default Mount


// React 의 mount 과정 실현
// constructor -> render -> componentDidmount 순으로,
// constructor 와 render method 에서 자료와 랜더링을 마치면,
// componentDidmunt 에서 최종적으로 state 나 props 혹은 react-element 에 기입되어야 자료를 가져와 기입한다