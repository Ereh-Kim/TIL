import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import UseState_component from 'react_hook_practice/useState';
import UseReducer_componenet from 'react_hook_practice/useReducer'
import UseEffect_component from 'react_hook_practice/useeffect';
import UseRef_component from 'react_hook_practice/useRef';
import Uselayouteffect_component from 'react_hook_practice/useLayouteffect'
import UseImperativeHandle_component from 'react_hook_practice/useImperativeHandle_practice/useImperativeHandle'
// import UseMemo_component from 'react_hook_practice/useMemo'
// import UseCallback_component from 'react_hook_practice/useCallback'
import UseContext_component from 'react_hook_practice/useContext_practice/useContext'



function Hook_manager () {

    return (
      
      <Routes>
  
      <Route exact path='/useState_practice' element={<UseState_component/>} />
      <Route exact path="/useReducer_practice" element={<UseReducer_componenet/>} />
      <Route exact path="/useeffect_practice" element={<UseEffect_component/>} />
      <Route exact path="/useRef_practice" element={<UseRef_component/>} />
      <Route exact path="/useLayouteffect_practice" element={<Uselayouteffect_component/>} />
      <Route exact path="/useImperativeHandle_practice" element={<UseImperativeHandle_component/>} />
      {/* <Route exact path="/useMemo_practice" element={<UseMemo_component/>} />
      <Route exact path="/useCallback_practice" element={<UseCallback_component/>} /> */}
      <Route exact path="/useContext_practice" element={<UseContext_component/>} />


      </Routes>
      
    )
  
  
  }

  export default Hook_manager