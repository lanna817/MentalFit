import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/nature1.jpg';

export default function Intro(props) {
  return (
    <div className='land-page'>
      <Link to='/'>
        <img id="mlogo" src='mflogosv.svg' alt='logom'/>
      </Link>
      <img id='nature1' src={image} width='100%' height='100%' alt='man on edge of cliff' />
      { /*this name will be a logo created */}
      {
        props.qod.map(quoteDay => (
          <div id='quo' key={quoteDay.id}>
            <h2>{quoteDay.quote}</h2>
            <h3>-{quoteDay.author}</h3>
            <Link to='/site'>
            <button id="inspire-btn">Get Inspired</button>
            </Link>

          </div>

        )
        )
      }

    </div>


  )


}