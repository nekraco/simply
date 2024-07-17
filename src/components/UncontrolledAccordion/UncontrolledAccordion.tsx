import {useState} from "react";


type UnAccordionPropsType = {
  title: string
}

export function UncontrolledAccordion(props: UnAccordionPropsType) {

  let [collapsed, setCollapsed] = useState(true);

  let butStyle = {
    display: 'block',
    marginTop: '40px',
  }

  return (
    <div>
      <button onClick={() => setCollapsed(!collapsed)}
              style={{marginTop: '40px', background: '#cca'}}
      >
        TOGGLE
      </button>

      <AccordionTitle title={props.title}/>
      {!collapsed && <AccordionBody/>}
      <hr/>
    </div>
  );

  type AccordionTitlePropsType = {
    title: string
  }

  function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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
}