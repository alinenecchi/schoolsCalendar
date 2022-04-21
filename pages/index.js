import React from 'react';
import Navbar from '../components/molecules/navbar';
import Title from '../components/atoms/title';
import css from '../utils/styles/home.module.scss';
import NewNav from "../components/molecules/navbar-new";

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

<NewNav />
    
    <div className={css["title"]}>
      <Title> Hello SchollsCalendar</Title>
    </div>
  </div>;
}
