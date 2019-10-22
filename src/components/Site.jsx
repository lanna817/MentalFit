import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Activity from './Activity';
import Relax from './Relax';
import About from './About';
import Footer from './Footer';
import image from '../images/bghome.jpg'

export default function Site() {
  return (
    <div>
    
    <Nav />

    <img id="bg-img" src={image} alt="boat on water" width='100%' height='100%' />



    </div>





  )




}