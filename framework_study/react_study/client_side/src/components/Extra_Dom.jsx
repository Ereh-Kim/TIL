import React from "react";

class Extra extends React.Component {
    
    state = {
        inheritation : [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ]
    }

    render(){
        return (
        <React.Fragment>
        {this.state.inheritation.map(item =>
         <p  key={item.id} value={item.value}>
         This is Extra_Dom </p> )}
        </React.Fragment>
        )
    }
}

export default Extra