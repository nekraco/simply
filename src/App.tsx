import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating/>
      <Accordion/>
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  );
}

function Accordion() {
  return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  );
}

function AccordionTitle() {
  return <h3>Меню</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

function AppTitle() {
  return <>This is APP component</>
}

function Star() {
  return (
    <div>star</div>
  )
}

export default App;
