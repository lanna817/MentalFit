import React from 'react';
import { Link } from 'react-router-dom';


export default function Intro(props) {
  return (
    <div className='land-page'>
      <Link to='/'>
        <h1>MentalFit</h1>
        </Link>
      { /*this name will be a logo created */}
      {
        props.qod.map(quoteDay => (
          <div key={quoteDay.id}>
            <h2>{quoteDay.quote}</h2>
            <h3>-{quoteDay.author}</h3>
            <Link to='/site'>
            <button id='inspired-btn'>Get Inspired</button>
            </Link>

          </div>

        )
        )
      }

    </div>


  )


}