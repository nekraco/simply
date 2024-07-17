import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";



function App() {
  return (
    <div className={'App'}>
      <OnOff/>
      <PageTitle title={'This is APP component'}/>
      <PageTitle title={'My friends'}/>
      <Accordion title={'TodoList'} collapsed={false}/>
      {/*<hr/>*/}
      {/*Article 1*/}
      {/*<Rating num={4}/>*/}
      {/*<hr/>*/}
      {/*Article 2*/}
      {/*<Rating num={1}/>*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
