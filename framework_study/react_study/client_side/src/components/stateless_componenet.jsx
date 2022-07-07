import React, {Component} from "react"

// stateless component

const Stateless_Component = (props) => {

    return (
            <React.Fragment>
                {props}
            </React.Fragment>
        )

}

//class component

class Class_Componenet extends Component {

    render (){
        return (
            <React.Fragment></React.Fragment>
        )
    }

}
