import React from 'react';

// loading the sass style fot the component
import css from './title.module.scss';

/**
 * Atom Title
 * 
 * <!-- TODO: add a description here! -->
 */
function Title (props) {
  const {
    className = "",
    children,
    level = 2,
    ...other
  } = props;

  const El = `h${level}`;

  return <El
    className={`${css["atom__title-container"]} ${className}`}
    {...other}
  >
    {children}
  </El>;
}

export default Title;
