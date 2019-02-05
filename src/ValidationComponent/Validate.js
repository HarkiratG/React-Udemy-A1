import React from 'react';


const Validation = (props) => {
  let msg = "Text too long";
  if (props.length < 5) {
    msg =  "Text too short";
  }

  return (
    <div>
      <p> {msg} </p>
      <p> {props.children} </p>
    </div>
  )
}


  export default Validation
