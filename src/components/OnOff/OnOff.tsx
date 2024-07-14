import {useState} from "react";


export function OnOff() {

  let [value, setValue] = useState(false);

  let bc1 = value ? 'red': 'green'
  let bc2 = !value ? 'red': 'green'


  return (
    <div className={'OnOff'}>
      <span style={{background: bc1}} onClick={() => setValue(true)}>on</span>
      <span style={{background: bc2}} onClick={() => setValue(false)}>off</span>
      <span style={{background: bc1}}></span>
    </div>
  )
}