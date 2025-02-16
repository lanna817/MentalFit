import React from 'react';
import { Link } from 'react-router-dom';
import Activity from './Activity';
import Relax from './Relax';
import About from './About';
import image from '../images/bghome.jpg';



export default function Site() {
  return (
    <div>
       <h2 className='quote-ste'>"My mission in life is not merely to survive, but to thrive; 
        and to do so with some passion, some compassion, some humor, and some style."
        
        <br /> -Maya Angelou
        </h2>

      <div className='text-top'>
        <nav>
          <Link to='/activity'>
            <button className='btn-site'>Activity</button>
          </Link>
          <Link to='/relax'>
            <button className='btn-site'>Relax</button>
          </Link>
          
          <Link to='/about'>
          <button className='btn-site'>About</button>
          </Link>
          
        </nav>
        </div>
        <Link to='/'>
          <img id="hmlogo" src='mflogo.png' alt='logo home' width="10%" />
        </Link>  
    
      <img id="bghome" src={image} alt="boats on water" width='100%' height='100%' />
    </div>





  )




}