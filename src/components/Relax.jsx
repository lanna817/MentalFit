import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/rain2leaves.jpg';
import Sound from './Sound';


export default function Relax(props) {
  return (
    <div>
      <h2 className='quote-rel'>“Music gives a soul to the universe, wings to the mind,
         flight to the imagination and life to everything.”
         <br /> -Plato</h2>
    <div className='relax-pg'>
       <Link to='/site'>
          <img id="hmlogo" src='mflogo.png' alt='logo home' width="10%" />
        </Link> 
      <img id='rain2leaves' src={image} width="100%" height='100%' alt='rain on leaves' />
      <Sound />
    </div>
    </div>





  )




}