import React, {Component} from 'react'

class Updater extends Component {

        state= {
            store: 'undefined'
        }


        componentDidUpdate = (prevProps, prevState) => {

            console.log('this is props' ,prevProps)

            return prevProps.value === 0 ?
              'hi' : 'hihi'
            
        }

        


    render(){


        return (
            <div>
            <p> {this.props.value} </p>
            </div>
            )

    }

}

export default Updater