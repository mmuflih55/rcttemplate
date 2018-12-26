import React from 'react';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';
import { MyContext } from './Context';
import Root from './pages/Root';
import Reducer from './Reducer'

const App = () => {
  const {state,dispatch} = Reducer();
  return (
    <MyContext.Provider value={{state,dispatch}}>
      <Root/>
    </MyContext.Provider>
  );    
};

export default App;