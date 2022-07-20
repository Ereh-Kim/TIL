import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (

    <View style={styles.BodyLayout}>
      {/* ㄴ> web 상의 div 와 같은 ( container ) 역할군을 함 */}

      <TextInput style={styles.flex1} placeholder='place_your_email'/>

      <Text style={
        {flex:4, borderColor: 'black', borderWidth: 2}
        // ㄴ> react-native 의 경우, 
        // css 문법에서의 background-color 를 backgroundColor 로
        //  해당 css 기능이 적용이 가능하게끔 한다
        
        }>amaba_culture</Text>
      {/* ㄴ? text display 를 하기 위한 태그 */}

      <Button 
      title='Tap here'
      style={styles.TestingStyle} />

    </View>
    //ㄴ> View, Text 와 같은 태그를 쓰는 이유
    //     ㄴ=> 해당 mobile 의 os 는 web 에서 구동되는 os 체제가 다르기에
    //          Dom Element 이 사용/구현되지 않는다
  );
}

const styles = StyleSheet.create({

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
  }

});

// react-native 에는 css 파일이 존재하지 않는다/지원되지 않는다
// ㄴ> 이유도 단순하다, web 환경이 아니기 때문이다

// 오직, js object 로만 전달 가능