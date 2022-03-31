import React from 'react';
import css from '../utils/styles/home.module.scss';



export default function Home(props) {

  const {
    className = "",
    children,
    ...other
  } = props;
   
  return <div
    className={`${css['page__home-container']} ${className}`}
    {...other}
  >

     <div>
       <h1>Hello SchollsCalendar</h1> 
     </div>

  </div>;
}
