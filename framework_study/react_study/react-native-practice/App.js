import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList } from 'react-native';
import { useState } from 'react';
import {styles} from './components/stylesheet.js'
// import Delete_list from './components/delete_list.js';

export default function App() {

  const [State, updateState] = useState('')
  const [ListManager, updateList] = useState([])

  const Adding_list = () => {
    updateList([...ListManager,State])
  }

  const Delete_list_helper=(target)=>{
    const Deleted = ListManager.filter(e => e != target)
    updateList([...Deleted])
    
  }

  return (

    <View style={styles.BodyLayout}>
      {/* ㄴ> web 상의 div 와 같은 ( container ) 역할군을 함 */}


      
      <TextInput 
      onChangeText={(text)=>{updateState({id: text,value: text})}}
      style={styles.flex1}
      placeholder='place_your_email'
      />

    

      <Text style={
        {flex:4, borderColor: 'black', borderWidth: 2}
        // ㄴ> react-native 의 경우, 
        // css 문법에서의 background-color 를 backgroundColor 로
        //  해당 css 기능이 적용이 가능하게끔 한다
        
        }>hi daddy, {State.value}</Text>
      {/* ㄴ? text display 를 하기 위한 태그 */}

      {/* <View style={styles.container}>
      <ScrollView> */}
        
        {/* {ListManager.map(list => <Text key={list}> {list} </Text>)} */}
        
      {/* </ScrollView> */}
      {/* ㄴ> ScrollView tag는 어떠한 영역 내에서 scroll down 을 할 수 있게끔하는 tag이다 */}
      {/* </View> */}

      <View style={styles.container}>

      <FlatList
      data={ListManager}
      renderItem={(Sended_Data)=>{
        return(
          <Button
          title='test'
          value={Sended_Data.item.value}
          />
        )
      }} />

      </View>

      <Button 
      title='Tap here'
      style={styles.TestingStyle}
      onPress={Adding_list}
       />

    </View>
    //ㄴ> View, Text 와 같은 태그를 쓰는 이유
    //     ㄴ=> 해당 mobile 의 os 는 web 에서 구동되는 os 체제가 다르기에
    //          Dom Element 이 사용/구현되지 않는다
  );
}
