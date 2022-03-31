import React, {useState, useEffect} from 'react';
import Section from '../../atoms/section';
import Button from '../../atoms/button';
import Link from 'next/link';
import css from "./navbar.module.scss";


function Navbar (props) {
  const {
    className = "",
    children,
    style,
    ...other
  } = props;

  return <Section
    className={`${css['molecule__navbar-container']} ${className}`}
    data-style={style}
    {...other}
  >
    <nav className={css['navbar-container']}>
        <h1>Hello SchollsCalendar</h1> 
    </nav>

  </Section>;
}

export default Navbar;
