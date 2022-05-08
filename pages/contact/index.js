import React from 'react';
import Title from '../../components/atoms/title';
import Footer from '../../components/organisms/footer';
import css from './contact.module.scss';

export default function Contact(props) {

  const {
    className = "",
    children,
    sectionHero,
    ...other
  } = props;
   
  return <div
    className={`${css['page__contact-container']} ${className}`}
    {...other}
  >
    <div className={css["title"]}>
      <Title> Contato </Title>
    </div>
  </div>;
}
