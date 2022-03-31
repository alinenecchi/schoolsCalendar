import React from 'react';
import * as data from '../data/home';
import SectionHero from '../components/organisms/section-hero';
import Navbar from '../components/molecules/navbar';
import css from '../utils/styles/home.module.scss';



export default function Home(props) {

  const {
    className = "",
    children,
    sectionHero,
    ...other
  } = props;
   
  return <div
    className={`${css['page__home-container']} ${className}`}
    {...other}
  >

    <div class="stars" ></div>
    <div class="stars2" ></div>
    <div class="stars3" ></div>
    
    <Navbar 
        className={css['navbar']} 
      />
  </div>;
}
