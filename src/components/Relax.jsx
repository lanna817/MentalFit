import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/rain2leaves.jpg';
import Sound from './Sound';


export default function Relax(props) {
  return (
    <div className='relax-pg'>

      <img id='rain2leaves' src={image} width="100%" height='100%' alt='rain on leaves' />
      <Sound />
    </div>





  )




}