import React, {useState} from "react";


export function UncontrolledRating() {

  const hrStyle = {
    width: '300px',
    margin: '20px 0px',
    border: 'solid #a81 2px',
  }

  return (


    <div>
      <Star number={1}/>
      <Star number={2}/>
      <Star number={3}/>
      <Star number={4}/>
      <Star number={5}/>

      <hr style={hrStyle}/>
    </div>
  )
}

type StarPropsType = {
  number: number
}

function Star(props: StarPropsType) {

  const butStyle = {
    borderRadius: '10px',
    background: 'gray',
    border: 0,
  }

  const [glow, setGlow] = useState(false);


  return (
    <>
      {glow ? <span> <b>star</b> </span> : <span> star </span>}
      <button style={butStyle} onClick={() => setGlow(!glow)}>
      {props.number}
    </button> ||
    </>
  )
}