import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={'This is APP component'}/>
      <PageTitle title={'My friends'}/>
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

function PageTitle(props: any) {
  return <h1>{props.title}</h1>
}

export default App;
