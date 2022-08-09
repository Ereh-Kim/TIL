import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // ㄴ> stylesheet 태그의 create method 는
    //      ㄴ=> react-native 의 stylesheet object 를 반환한다 
  
    // 이때, argument 로 
    // 적용할 style 에 대해 object 형태로 넣는다/적용한다
    
    BodyLayout: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 30,
      height: '80%'
    },
  
    TestingStyle: {
      width: '80%',
      backgroundColor: 'yellow',
      padding: 5,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 15
    },
  
    flex1: {
      flex: 4,
      borderColor: 'black',
      borderWidth: 2,
    },
  
    flex2:{
      flex:2,
      borderColor: 'black',
      borderWidth: 2,
    },
  
    // flex 는 web 에서 grid 와 같은 맥락이라고 이해하면 쉅다.
    // 공간을 분할해서, 얼만큼의 공간만큼을 차지할지를 비율로 표시한다
  
    container:{
      flex:5
    }
  
  });
  
  // react-native 에는 css 파일이 존재하지 않는다/지원되지 않는다
  // ㄴ> 이유도 단순하다, web 환경이 아니기 때문이다
  
  // 오직, js object 로만 전달 가능

