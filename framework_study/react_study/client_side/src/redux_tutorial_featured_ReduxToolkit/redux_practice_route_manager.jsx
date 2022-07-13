import React from "react";
import {Routes, Route} from 'react-router-dom'

import App from './redux_applied_app.jsx'

function Redux_practice_ReduxToolkit_applied ()  {

    return(

        <Routes>
    
        <Route exact path="/redux_practice_ReduxToolkit_applied" element={<App/>} />
    
        </Routes>
    
        )

}

export default Redux_practice_ReduxToolkit_applied