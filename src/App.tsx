import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <AppTitle/>
      <Accordion/>
      <hr/>
      Article 1
      <Rating num={4}/>
      <hr/>
      Article 2
      <Rating num={1}/>
    </div>
  );
}

function AppTitle() {
  return <>This is APP component</>
}

export default App;
