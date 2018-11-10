import React from 'react';

const person = (props) => {
  return(
    <div>
        <p onClick={props.click}>This is my first person name: {props.name} and his/her age: {props.age}</p>
        <p>This is props children: {props.children}</p>
    </div>
  )
}; 

export default person;