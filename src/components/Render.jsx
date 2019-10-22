import React from 'react';
import {Link} from 'react-router-dom';


export default function Render(props) {
  console.log(props)
  return (

    <div>
       <h1>Get Active</h1>
      <button id='recreational' onChange={props.handleChange} onClick={props.handleClick}>Recreational</button>{
        <h1>{props.activity}</h1>
      }
      
      <button id='social' onChange={props.handleChange} onClick={props.handleClick}>Social</button>{
         <h1>{props.type}</h1>
        
        }
      {/* <h1>{props.activity}</h1>
      <p>{props.type}</p> */}
      </div>
  )







}