import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/notebook.jpg'

export default function About() {

  return (
    <div className='about-pg'>
      <Link to='/site'>
        <img id="hmlogo" src='mflogo.png' alt='logo home' width="10%" />
      </Link>
      <div className='about-txt'>
      <h1 id='welcome'>Welcome to Mental Fit</h1>
      <p> I created this site to because I wanted to focus on building mental toughness and relaxation techniques. Life hits you hard and fast and you need an escape or to keep busy. So Feel free to explore this button centered site as I continue to update with more content.
          -Y.C.
      </p>
      </div>
      <img src={image} alt='notebook and camera' width='100%' height='100%' />
    </div>
  )
}