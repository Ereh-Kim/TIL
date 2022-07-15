import { useSelector } from "react-redux";

const Source = () => {

    const Storage_Data = useSelector( (Extract_data) => Extract_data )
    // userSelector 는 Store 에서의 데이터를  추출하게끔 하는 Redux-Toolkit ( API / Hooks ) 이다

    console.log(Storage_Data)

    return(
        <div>{Storage_Data}</div>
    )
}

export default Source