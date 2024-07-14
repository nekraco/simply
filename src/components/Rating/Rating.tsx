import React from "react";

type RatingPropsType = {
  num: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
  let stars = [];
  
  for (let i = 0; i < 5; i++) {
      if(i < props.num) {
        stars.push(<Star selected = {true} key = {i}/>);
      } else {
        stars.push(<Star selected = {false} key = {i}/>);
      }
  }
  
  return (
    <div>
      {stars}
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  //debugger
  if(props.selected) {
    return (
      <span> <b>star</b> </span>
    )
  }
  return (
    <span> star </span>
  )
}
