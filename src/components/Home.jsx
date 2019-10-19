import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(props) {
  return (
    <div className='land-page'>
      <h1>MentalFit</h1>
      { /*this name will be a logo created */}
      {
        props.qod.map(quoteDay => (
          <div key={quoteDay.id}>
            <h2>{quoteDay.quote}</h2>
            <h3>{quoteDay.author}</h3>

          </div>

        )
        )
      }

    </div>


  )


}