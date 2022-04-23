import React from 'react';
import Title from '../../components/atoms/title';
import Footer from '../../components/organisms/footer';
import css from './home.module.scss';

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
      <Title> Hello </Title>
    </div>
    <Footer/>
  </div>;
}
