import React from 'react';
import { Link } from 'react-router-dom';




export default function Render(props) {
  return (

    <div className='active-pg'>
      <h1 className='text-desc'>Choose the type of Activity</h1>
      <p>Click these buttons as much as you want for more suggestions!</p>

     


      {
        <div>
          <h1 className='activate-now'>{props.activity}</h1>
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
      

    </div >
  )







}