import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

  let accordionBody = !props.collapsed && <AccordionBody/>

  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}