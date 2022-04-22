import React from 'react';
import Button from '../components/atoms/button';
import Title from '../components/atoms/title';
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

    <div className={css["title"]}>
      <Title> Hello SchollsCalendar</Title>
      <Button>Button</Button>
    </div>
  </div>;
}
