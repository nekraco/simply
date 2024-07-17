import React, {useState} from "react";


export function UncontrolledRating() {


  const hrStyle = {
    width: '300px',
    margin: '20px 0px',
    border: 'solid #a81 2px',
  }

  const [rating, setRating] = useState(4);

  function changeRating(valueRating: number) {
    setRating(valueRating)
  }

  return (
    <div>
      <hr style={hrStyle}/>

      <Star selected={rating > 0} changeRating={changeRating} id={1}/>  |
      <Star selected={rating > 1} changeRating={changeRating} id={2}/>  |
      <Star selected={rating > 2} changeRating={changeRating} id={3}/>  |
      <Star selected={rating > 3} changeRating={changeRating} id={4}/>  |
      <Star selected={rating > 4} changeRating={changeRating} id={5}/>

      <hr style={hrStyle}/>
    </div>
  )
}


type StarPropsType = {
  selected: boolean
  id: number
  changeRating: (valueRating: number) => void
}

function Star(props: StarPropsType) {

  function changeRatingStar() {
      props.changeRating(props.id)
  }

  return (
    <>
      {props.selected
        ?
        <span onClick={changeRatingStar}><b> star </b></span>
        :
        <span onClick={changeRatingStar}> star </span>
      }
    </>
  )
}