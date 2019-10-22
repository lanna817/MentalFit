import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (

    <header>
      <div id='logo'>
        <Link to='/'>MentalFit</Link>
      </div>
      <div>
        <nav>
          <Link to='/site'>
            Home
            </Link>
          <a href='/activity'>Activity</a>
          <a href='/relax'>Relax</a>
          <a href='/about'>About</a>
    </nav>


      </div>
      
      </header>
  )
}