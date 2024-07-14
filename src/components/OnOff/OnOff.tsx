

type OnOffPropsType = {
  value: boolean
}

export function OnOff(props: OnOffPropsType) {
  let bc1 = props.value ? 'red': 'green'
  let bc2 = !props.value ? 'red': 'green'


  return (
    <div className={'OnOff'}>
      <span style={{background: bc1}}>on</span>
      <span style={{background: bc2}}>off</span>
      <span style={{background: bc1}}></span>
    </div>
  )
}