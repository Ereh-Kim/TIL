import React from "react";
import {Routes, Route} from 'react-router-dom'

import App from './redux_applied_app.jsx'

function Redux_practice ()  {

    return(

        <Routes>
    
        <Route exact path="/redux_practice" element={<App/>} />
    
        </Routes>
    
        )

}

export default Redux_practice