import React from 'react';
import { Link } from 'react-router-dom';


export default function Render(props) {
  console.log(props)
  return (

    <div>
      <h1>Get Active</h1>
      {
        <div>
          <h1>{props.activity}</h1>
          <p>{props.type}</p>
        </div>
      }
      <div className='button-grp'>
        <button id='recreational' onClick={props.handleClick}>Recreational</button>

        <button id='social' onClick={props.handleClick}>Social</button>

        <button id='relaxation' onClick={props.handleClick}>Relaxation</button>

        <button id='cooking' onClick={props.handleClick}>Cooking</button>

        <button id='education' onClick={props.handleClick}>Education</button>

        <button id='busywork' onClick={props.handleClick}>Busy Work</button>

        <button id='charity' onClick={props.handleClick}>Charity</button>

        <button id='music' onClick={props.handleClick}>Music</button>

      </div>

      {/* <h1>{props.activity}</h1>
      <p>{props.type}</p> */}
    </div>
  )







}