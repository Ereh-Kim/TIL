import React from "react";

class Extra extends React.Component {
    
    state = {
    
        data:[
        {id:1,value:4},
        {id:2,value:5},
        {id:3,value:6},
    ],
    
        props: this.props.value

    }


    render(){

        console.log("Props_Value" ,this.props)

        return (
        <React.Fragment>
        <button 
        onClick={()=> this.props.onDelete(this.props.id)}
         >Delete_button</button>
        
        <button
        onClick={()=> this.props.onReset({id:this.props.id, value:this.props.value})}
        >Insert_button</button>

         <p>{this.props.children}</p>
         {this.state.data.map(input=><button key={input.id} value={input.value}>Extra_Dom</button>)}

        </React.Fragment>
        )
    }
}

export default Extra