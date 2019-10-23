import React from 'react';
import { Link } from 'react-router-dom';
import Activity from './Activity';
import Relax from './Relax';
import About from './About';
import Footer from './Footer';
import image from '../images/bghome.jpg'

export default function Site() {
  return (
    <div>


      <div id='logo'>
        {/* <Link to='/site'>
          <img id="hmlogo" src='mflogo.png' alt='logo home' width="10%" />
        </Link>   */}
      </div>

      <div className='text-top'>
        <nav>
          <button className='btn-site'><a href='/activity'>Activity</a></button>
          <button className='btn-site'><a href='/relax'>Relax</a></button>
          <button className='btn-site'><a href='/about'>About</a></button>
          </nav>
      </div>

      <img id="bghome" src={image} alt="boats on water" width='100%' height='100%' />
    </div>





  )




}