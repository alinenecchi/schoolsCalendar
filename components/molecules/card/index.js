import React from 'react';
import css from './loader.module.scss';

function Card (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css['molecule__card-container']} ${className}`}
    {...other}
  >
    Card
      {children}
  </div>;
}

export default Card;
