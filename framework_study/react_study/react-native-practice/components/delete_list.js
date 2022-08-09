import { Button } from "react-native"


const Delete_list = (props) => {


    
    return(
        <Button
        title={props.value}
        onPress={props.helper(props.value)}
        />
    )
}

export default Delete_list