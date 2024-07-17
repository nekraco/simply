import React, {useState} from "react";


export function UncontrolledRating() {
  const butStyle = {
    borderRadius: '10px',
    background: 'gray',
    border: 0,
  }

  const hrStyle = {
    width: '300px',
    margin: '20px 0px',
    border: 'solid #a81 2px',
  }

  const [rating, setRating] = useState(4);

  return (
    <div>
      <Star selected={rating > 0}/>
      <button style={butStyle} onClick={() => setRating(1)}>1</button>

      <Star selected={rating > 1}/>
      <button style={butStyle} onClick={() => setRating(2)}>2</button>

      <Star selected={rating > 2}/>
      <button style={butStyle} onClick={() => setRating(3)}>3</button>

      <Star selected={rating > 3}/>
      <button style={butStyle} onClick={() => setRating(4)}>4</button>

      <Star selected={rating > 4}/>
      <button style={butStyle} onClick={() => setRating(5)}>5</button>

      <hr style={hrStyle}/>
    </div>
  )
}


type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  return (
    <>
      {props.selected ? <span><b> star </b></span> : <span> star </span>}
    </>
  )
}