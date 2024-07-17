import {useState} from "react";


export function OnOff() {

  let [value, setValue] = useState(false);

  let bc1 = value ? 'green': 'gray';
  let bc2 = !value ? 'red': 'gray';
  let bc3 = value ? 'green': 'red';


  return (
    <div className={'OnOff'}>
      <span style={{background: bc1}} onClick={() => setValue(true)}>on</span>
      <span style={{background: bc2}} onClick={() => setValue(false)}>off</span>
      <span style={{background: bc3}}></span>
    </div>
  )
}