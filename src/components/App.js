import React from 'react';
import '../css/App.scss'
import Navigaton from "./Navigation"
import ToDosContainer from './ToDosContainer';
import ToDanesContainer from './ToDanesContainer';


function App() {
  return (
    <div  className="app">
    <Navigaton/>
    <ToDosContainer/>
    <ToDanesContainer/>
    </div>
  );
}

export default App;
