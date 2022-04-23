import React from 'react';
import Title from '../../components/atoms/title';
import css from './who-we-are.module.scss';
import Footer from '../../components/organisms/footer';

export default function WhoWeAre(props) {

  const {
    className = "",
    children,
    sectionHero,
    ...other
  } = props;
   
  return <div
    className={`${css['page__who-we-are-container']} ${className}`}
    {...other}
  >
    <div className={css["title"]}>
      <Title>Quem somos</Title>
    </div>
    <Footer/>
  </div>;
}
