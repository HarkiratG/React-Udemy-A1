import React from 'react';
import './CharComponent.css';



const CharComponent = (props) => {
  return (
    <div className = "CharComponent">
      <p onClick={props.delete}> {props.char} </p>
      <p> {props.children} </p>
    </div>
  )
};

export default CharComponent
