import React from "react";

export function Rating(props: any) {
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

function Star(props: any) {
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
