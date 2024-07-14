import React from "react";

export function Rating() {
  return (
    <div>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>
  );
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